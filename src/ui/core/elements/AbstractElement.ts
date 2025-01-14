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
        if (classList !== null && !this.hasClass(className))
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

    addEventListener(eventName: string, fn: Function, capture: boolean = false) {
        if (this.element)
            (this.element as any).addEventListener(eventName, fn);
    }

    addEventHandlers() {
    }

    clientLeft(): number {
        if (this.element === undefined)
            return 0;
        return (this.element as any).clientLeft;
    }

    clientTop(): number {
        if (this.element === undefined)
            return 0;
        return (this.element as any).clientTop;
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

    defaultBorder(): string {
        return '';
    }

    defaultBorderTop(): string {
        return '';
    }

    defaultBottom(): number {
        return 0;
    }

    defaultClasses(): string[] {
        return [];
    }

    defaultLeft(): number {
        return 0;
    }

    defaultRight(): number {
        return 0;
    }

    defaultTagName(): string {
        return 'div';
    }

    defaultTop(): number {
        return 0;
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
        return false;
    }

    hasClass(className: string): boolean {
        const classList: any = this.element?.classList;
        if (classList !== null)
            return classList.contains(className);
        return false;
    }

    hide() {
        this.removeClass('d-block');
        this.addClass('d-none');
    }

    initialize() {
        if (this.handlesOnReady())
            $(this.element).ready(() => { this.onReady(); });
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

    performAction(actionName: string, args: any = null): void {
        console.log('AbstractElement performAction', this.id, actionName, args);
    }

    removeAllChildren() {
        this.children = [];
        this.setInnerHtml('');
    }

    removeAttribute(name: string) {
        if (this.element === undefined)
            return;
        this.element?.removeAttribute(name);
    }

    removeClass(className: string) {
        const classList: any = this.element?.classList;
        if (classList !== null && this.hasClass(className))
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

    removeEventHandler(eventName: string) {
        if (this.element)
            (this.element as any).removeEventListener(eventName);
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

    setBorderTop(value: string) {
        this.setStyle('borderTop', value);
    }

    setBottom(value: number) {
        this.setStyle('bottom', value + '');
    }

    setDataBsTarget(target: string) {
        this.setAttribute('data-bs-target', `#${target}`);
    }

    setDataBsToggle(toggle: string) {
        this.setAttribute('data-bs-toggle', toggle);
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

    setHref(href: string) {
        if (this.element)
            (this.element as any).href = href;
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
        if (this.defaultTop() >= 0)
            this.setTop(this.defaultTop());
        else
            this.setHeight(-this.defaultTop());
        this.setRight(this.defaultRight());
        if (this.defaultBottom() >= 0)
            this.setBottom(this.defaultBottom());
        else
            this.setHeight(-this.defaultBottom());
        this.setLeft(this.defaultLeft());
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

    setRole(role: string) {
        if (this.element)
            (this.element as any).role = role;
    }

    setStyle(name: string, value: string) {
        const style: any = this.element?.style;
        if (style !== null)
            style[name] = value;
    }

    setStyles() {
        if (this.defaultAbsolutePositioning())
            this.setPositionAbsoluteWithInsets();
        if (this.defaultBackgroundColor().length > 0)
            this.setBackgroundColor(this.defaultBackgroundColor());
        if (this.defaultBorder().length > 0)
            this.setBorder(this.defaultBorder());
        if (this.defaultBorderTop().length > 0)
            this.setBorderTop(this.defaultBorderTop());
    }

    setText(text: string) {
        if (this.element !== null)
            this.element.textContent = text;
    }

    setTop(value: number) {
        this.setStyle('top', value + '');
    }

    setType(type: string) {
        this.setAttribute('type', type);
    }

    setVisibility(value: string) {
        this.setStyle('visibility', value);
    }

    setWidth(value: number) {
        this.setStyle('width', value + 'px');
    }

    setWidthPct(value: number) {
        this.setStyle('width', value + '%');
    }

    setZindex(value: number) {
        this.setStyle('zIndex', `${value}`);
    }

    show() {
        this.removeClass('d-none');
        this.addClass('d-block');
    }

}
