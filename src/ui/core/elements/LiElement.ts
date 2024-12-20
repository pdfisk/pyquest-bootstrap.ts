import { AbstractElement } from "./AbstractElement";

export class LiElement extends AbstractElement {

    constructor(text:string) {
        super();
        this.setText(text);
    }

    createElement(): HTMLElement | null {
        return document.createElement('li');
    }

    defaultClasses(): string[] {
        return ['list-group-item'];
    }

}
