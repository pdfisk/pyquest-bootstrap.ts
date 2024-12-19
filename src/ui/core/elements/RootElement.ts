import { AbstractElement } from "./AbstractElement";

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

    addStyles() {
        super.addStyles();
        this.addStyle('backgroundColor', 'red');
    }

    createElement() {
        window.onload = () => { this.onLoad(); }
    }

    onLoad() {
        this.element = document.body;
        super.onLoad();
    }

}
