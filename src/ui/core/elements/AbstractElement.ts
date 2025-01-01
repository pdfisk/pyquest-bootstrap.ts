import { IPerformAction } from "../../../interfaces/IPerformAction";
import { ElementRegistry } from "../../../util/ElementRegistry";

const $: any = (window as any).$;

export abstract class AbstractElement implements IPerformAction {
    children: AbstractElement[] = [];
    clickHandlerFn: Function | null = null;
    element: HTMLElement | null;
    id: string = '';
    static idCounter: number = 0;

    constructor() {
        this.element = this.createElement();
        this.addClickHandlerFn();
        this.initialize();
        this.addChildren();
        this.addClasses();
        this.addEventHandlers();
        this.setStyles();
        ElementRegistry.register(this);
    }

    addChild(child: AbstractElement) {
        this.children.push(child);
        if (child.element)
            this.element?.appendChild(child.element);
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

    addClickHandlerFn() {
    }

    addEventHandler(eventName: string, fn: Function) {
        if (this.element)
            (this.element as any)[eventName] = fn;
    }

    addEventHandlers() {
    }

    createElement(): HTMLElement | null {
        const elem = document.createElement(this.defaultTagName());
        elem.setAttribute('id', this.generateId());
        return elem;
    }

    defaultAbsolutePositioning(): boolean {
        return false;
    }

    defaultBackgroundColor(): string {
        return '';
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

    getInnerHtml(): string | undefined {
        return this.element?.innerHTML;
    }

    getText(): string {
        if (this.element !== null)
            return this.element.textContent ? this.element.textContent : '';
        return '';
    }

    generateId(): string {
        return this.id = `elem-${AbstractElement.idCounter++}`;
    }

    handlesOnReady(): boolean {
        return this.clickHandlerFn !== null;
    }

    hide() {
        this.removeClass('d-block');
        this.addClass('d-none');
    }

    initialize() {
        if (this.handlesOnReady())
            $(this.element).ready(() => { this.onReady(); });
    }

    insetBottom(): number {
        return 0;
    }

    insetLeft(): number {
        return 0;
    }

    insetRight(): number {
        return 0;
    }

    insetTop(): number {
        return 0;
    }

    isConnected(): boolean {
        if (this.element)
            return this.element.isConnected;
        return false;
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

    onReady() {
        if (this.clickHandlerFn instanceof Function)
            (this.element as any).onclick = this.clickHandlerFn;
    }

    performAction(actionName: string, args: any): void {
        console.log('AbstractElement performAction', this.id, actionName, args);
    }

    removeAllChildren() {
        this.children = [];
        this.setInnerHtml('');
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

    setAttribute(name: string, value: any) {
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

    setBottom(value: number) {
        this.setStyle('bottom', value + '');
    }

    setFullSize() {
        this.addClass('w-100');
        this.addClass('h-100');
    }

    setHeight(value: number) {
        this.setStyle('height', value + 'px');
    }

    setHeightPct(value: number) {
        this.setStyle('height', value + '%');
    }

    setInnerHtml(html: string) {
        if (this.element)
            (this.element as any).innerHTML = html;
    }

    setLeft(value: number) {
        this.setStyle('left', value + '');
    }

    setOverflow(value: string) {
        this.setStyle('overflow', value);
    }

    setPosition(value: string) {
        this.setStyle('position', value);
    }

    setPositionAbsolute() {
        this.setPosition('absolute');
    }

    setPositionAbsoluteWithInsets() {
        this.setPositionAbsolute();
        if (this.insetTop() >= 0)
            this.setTop(this.insetTop());
        else
            this.setHeight(-this.insetTop());
        this.setRight(this.insetRight());
        if (this.insetBottom() >= 0)
            this.setBottom(this.insetBottom());
        else
            this.setHeight(-this.insetBottom());
        this.setLeft(this.insetLeft());
    }

    setProperties() {
        for (let child of this.children)
            child.setProperties();
    }

    setRight(value: number) {
        this.setStyle('right', value + '');
    }

    setRightMargin(value: number) {
        this.setStyle('margin-right', value + 'px');
    }

    setStyles() {
        if (this.defaultAbsolutePositioning())
            this.setPositionAbsoluteWithInsets();
        if (this.defaultBackgroundColor().length > 0)
            this.setBackgroundColor(this.defaultBackgroundColor());
    }

    setText(text: string) {
        if (this.element !== null)
            this.element.textContent = text;
    }

    setTop(value: number) {
        this.setStyle('top', value + '');
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
