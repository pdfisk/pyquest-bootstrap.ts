import { AbstractElement } from "./AbstractElement";
import { TopMenuElement } from "./TopMenuElement";

export class RootElement extends AbstractElement {
    static instance: RootElement;

    static getInstance(): RootElement {
        if (this.instance === undefined)
            this.instance = new RootElement;
        return this.instance;
    }

    private constructor() {
        super();
        window.onload = () => { this.onLoad(); }
    }

    addChildren() {
        this.addChild(new TopMenuElement());
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

    setProperties() {
        super.setProperties();
    }

}
