import { AbstractElement } from "./AbstractElement";

export class DivElement extends AbstractElement {

    constructor() {
        super();
    }

    createElement(): HTMLElement | null {
        return document.createElement('div');
    }

    defaultClasses(): string[] {
        return ['container-fluid', 'flex-grow-1'];
    }

}
