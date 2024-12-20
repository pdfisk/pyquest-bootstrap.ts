import { AbstractElement } from "./AbstractElement";

export class BodyElement extends AbstractElement {
    static instance: BodyElement;

    static getInstance(): BodyElement {
        if (this.instance === undefined)
            this.instance = new BodyElement;
        return this.instance;
    }

    private constructor() {
        super();
        window.onload = () => { this.onLoad(); }
    }

    createElement(): HTMLElement | null {
        return null;
    }

    onLoad() {
        this.element = document.body;
        this.addClasses();
        this.renderChildren();
        this.setProperties();
    }

}
