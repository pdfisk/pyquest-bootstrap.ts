import { AbstractElement } from "./AbstractElement";
import { LiElement } from "./LiElement";

export class UlElement extends AbstractElement {

    constructor() {
        super();
    }

    addChildren() {
        this.addChild(new LiElement('Syntax'));
        this.addChild(new LiElement('Functions'));
        this.addChild(new LiElement('Classes'));
    }

    createElement(): HTMLElement | null {
        return document.createElement('ul');
    }

    defaultClasses(): string[] {
        return ['list-group'];
    }

}
