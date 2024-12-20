import { AbstractElement } from "./AbstractElement";

export class DivElement extends AbstractElement {

    createElement(): HTMLElement | null {
        return document.createElement('div');
    }

    defaultClasses(): string[] {
        return ['container-fluid'];
    }

}
