import { AbstractElement } from "./AbstractElement";
import { DivElement } from "./DivElement";

export class RootElement extends AbstractElement {
    static instance: RootElement;

    static getInstance(): RootElement {
        if (this.instance === undefined)
            this.instance = new RootElement;
        return this.instance;
    }

    private constructor() {
        super();
    }

    addChildren() {
        this.addChild(new DivElement());
    }

    setProperties() {
        super.setProperties();
        this.setBackgroundColor('red');
    }

    createElement() {
        window.onload = () => { this.onLoad(); }
    }

    onLoad() {
        this.element = document.body;
        super.onLoad();
    }

}
