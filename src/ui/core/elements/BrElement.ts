import { AbstractElement } from "./AbstractElement";

export class BrElement extends AbstractElement {

    constructor() {
        super();
    }

    createElement(): HTMLElement | null {
        return document.createElement('br');
    }

}
