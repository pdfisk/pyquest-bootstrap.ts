export abstract class AbstractElement {
    children: AbstractElement[] = [];
    element: HTMLElement | null;

    constructor() {
        this.element = this.createElement();
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
        if (classList !== null)
            classList.add(className);
    }

    addClasses() {
        for (let className of this.defaultClasses())
            this.addClass(className);
        for (let child of this.children)
            child.addClasses();
    }

    abstract createElement(): HTMLElement | null;

    defaultClasses(): string[] {
        return [];
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

    setWidth(value: number) {
        this.setStyle('width', value + 'px');
    }

    setStyle(name: string, value: string) {
        const style: any = this.element?.style;
        if (style !== null)
            style[name] = value;
    }

}
