import { IPerformAction } from "../../../interfaces/IPerformAction";
import { ElementRegistry } from "../../../util/ElementRegistry";

export abstract class AbstractElement implements IPerformAction {
    children: AbstractElement[] = [];
    element: HTMLElement | null;
    id: string = '';
    static idCounter: number = 0;

    constructor() {
        this.element = this.createElement();
        this.initialize();
        this.addChildren();
        this.addClasses();
        ElementRegistry.register(this);
    }

    addChild(child: AbstractElement) {
        this.children.push(child);
    }

    addChildren() {
    }

    addClass(className: string) {
        const classList: any = this.element?.classList;
        if (classList !== null && !classList.contains(className))
            classList.add(className);
    }

    addClasses() {
        for (let className of this.defaultClasses())
            this.addClass(className);
        for (let child of this.children)
            child.addClasses();
    }

    addClickHandler() {
        const args = this.onClickArgs();
        const jsonStr64 = btoa(JSON.stringify(args));
        this.setAttribute('onclick', `pq_api.handleEvent('${jsonStr64}')`);
    }

    createElement(): HTMLElement | null {
        const elem = document.createElement(this.defaultTagName());
        elem.setAttribute('id', this.generateId());
        return elem;
    }

    defaultClasses(): string[] {
        return [];
    }

    defaultTagName(): string {
        return 'div';
    }

    getAttribute(name: string): string | null | undefined {
        if (this.element === undefined)
            return null;
        return this.element?.getAttribute(name);
    }

    getText(): string {
        if (this.element !== null)
            return this.element.textContent ? this.element.textContent : '';
        return '';
    }

    generateId(): string {
        return this.id = `elem-${AbstractElement.idCounter++}`;
    }

    hide() {
        this.removeClass('d-block');
        this.addClass('d-none');
    }

    initialize() {
    }

    onClickArgs(): any {
        const args = { event: 'click' };
        return Object.assign(args, this.onEventArgs());
    }

    onEventArgs(): any {
        return {
            id: this.id
        }
    }

    performAction(actionName: string, args: any): void {
    }

    removeClass(className: string) {
        const classList: any = this.element?.classList;
        if (classList !== null && classList.contains(className))
            classList.remove(className);
    }

    renderChild(child: AbstractElement) {
        if (this.element !== null && child.element !== null)
            this.element.appendChild(child.element)
    }

    renderChildren() {
        for (let child of this.children) {
            this.renderChild(child);
            child.renderChildren();
        }
    }

    setAttribute(name: string, value: string) {
        if (this.element === undefined)
            return;
        this.element?.setAttribute(name, value);
    }

    setBackgroundColor(value: string) {
        this.setStyle('backgroundColor', value);
    }

    setBorder(value: string) {
        this.setStyle('border', value);
    }

    setHeight(value: number) {
        this.setStyle('height', value + 'px');
    }

    setHeightPct(value: number) {
        this.setStyle('height', value + '%');
    }

    setProperties() {
        for (let child of this.children)
            child.setProperties();
    }

    setText(text: string) {
        if (this.element !== null)
            this.element.textContent = text;
    }

    setVisibility(value: string) {
        this.setStyle('visibility', value);
    }

    setWidth(value: number) {
        this.setStyle('width', value + 'px');
    }

    setStyle(name: string, value: string) {
        const style: any = this.element?.style;
        if (style !== null)
            style[name] = value;
    }

    show() {
        this.removeClass('d-none');
        this.addClass('d-block');
    }

}
