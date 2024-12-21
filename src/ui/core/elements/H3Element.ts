import { AbstractElement } from "./AbstractElement";

export class H3Element extends AbstractElement {

    constructor(text: string) {
        super();
        this.setText(text);
        this.addClickHandler();
    }

    defaultTagName(): string {
        return 'h3';
    }

}
