import { AbstractElement } from "./AbstractElement";

export class LiElement extends AbstractElement {

    constructor(text: string) {
        super();
        this.setText(text);
    }

    defaultTagName(): string {
        return 'li';
    }

}
