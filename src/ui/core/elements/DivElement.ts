import { AbstractElement } from "./AbstractElement";

export abstract class DivElement extends AbstractElement {

    constructor() {
        super();
    }

    createElement() {
        this.element = document.createElement('div');
    }

}
