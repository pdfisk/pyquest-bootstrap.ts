export abstract class AbstractElement {
    children: AbstractElement[] = [];
    element: HTMLElement|null;

    constructor() {
        this.element = this.createElement();
        this.addChildren();
    }

    addChild(child: AbstractElement) {
        this.children.push(child);
    }

    addChildren() {
    }

    abstract createElement(): HTMLElement|null;

    onLoad() {
        this.setProperties();
        for (let child of this.children)
            child.onLoad();
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

    setProperties() {
        for (let child of this.children)
            child.setProperties();
    }

    setBackgroundColor(value: string) {
        this.setStyle('backgroundColor', value);
    }

    setHeight(value: number) {
        this.setStyle('height', value + 'px');
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
