import { AbstractElement } from "./AbstractElement";

export class H5Element extends AbstractElement {

    constructor(text: string) {
        super();
        this.setText(text);
    }

    defaultTagName(): string {
        return 'h5';
    }

}
