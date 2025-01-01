import { AbstractElement } from "./AbstractElement";

export class AnchorElement extends AbstractElement {

    constructor(text: string) {
        super();
        this.setText(text);
    }

    defaultTagName(): string {
        return 'a';
    }

}
