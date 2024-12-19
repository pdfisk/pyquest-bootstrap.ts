export abstract class AbstractElement {
    children: AbstractElement[] = [];
    element: HTMLElement | null = null;

    constructor() {
        this.createElement();
        this.addChildren();
    }

    addChild(child: AbstractElement) {
        this.children.push(child);
        if (child.element !== null)
            this.element?.appendChild(child.element)
    }

    addChildren() {
    }

    abstract createElement(): void;

    onLoad() {
        this.setProperties();
        for(let child of this.children)
            child.onLoad();
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
