export abstract class AbstractElement {
    children: AbstractElement[] = [];
    element: HTMLElement | null;
    static idCounter: number = 0;

    constructor() {
        this.element = this.createElement();
        this.initialize();
        this.addChildren();
        this.addClasses();
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

    generateId(): string {
        return `elem-${AbstractElement.idCounter++}`;
    }

    hide() {
        this.removeClass('d-block');
        this.addClass('d-none');
    }

    initialize() {
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
