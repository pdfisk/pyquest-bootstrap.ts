import { AbstractElement } from "./AbstractElement";

export class UlElement extends AbstractElement {

    defaultClasses(): string[] {
        return ['list-group'];
    }

    defaultTagName(): string {
        return 'div';
    }

}
