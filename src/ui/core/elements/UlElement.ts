import { AbstractElement } from "./AbstractElement";

export class UlElement extends AbstractElement {

    createElement(): HTMLElement | null {
        return document.createElement('ul');
    }

    defaultClasses(): string[] {
        return ['list-group'];
    }

}
