export abstract class AbstractElement {
    children:AbstractElement[]=[];
    element: HTMLElement | null = null;

    constructor() {
        this.createElement();
    }

    addChild(child:AbstractElement) {
        this.children.push(child);
    }

    addStyle(name: string, value: string) {
        const style: any = this.element?.style;
        if (style !== null)
            style[name] = value;
    }

    addStyles() {
    }

    abstract createElement(): void;

    onLoad() {
        this.addStyles();
    }

}
