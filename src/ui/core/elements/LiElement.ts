import { AbstractElement } from "./AbstractElement";

export class LiElement extends AbstractElement {

    constructor(text: string) {
        super();
        this.setText(text);
    }

    defaultClasses(): string[] {
        return ['list-group-item'];
    }

    defaultTagName(): string {
        return 'li';
    }

}
