import { AbstractElement } from "./AbstractElement";

export class BrElement extends AbstractElement {

    constructor() {
        super();
    }

    defaultTagName(): string {
        return 'br';
    }

}
