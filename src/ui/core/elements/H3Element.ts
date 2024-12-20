import { AbstractElement } from "./AbstractElement";

export class H3Element extends AbstractElement {

    constructor(text: string) {
        super();
        this.setText(text);
    }

    createElement(): HTMLElement | null {
        return document.createElement('h3');
    }

}
