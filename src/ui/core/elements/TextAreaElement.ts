import { AbstractElement } from "./AbstractElement";

export class TextAreaElement extends AbstractElement {

    constructor() {
        super();
    }

    defaultTagName(): string {
        return 'textarea';
    }

}
