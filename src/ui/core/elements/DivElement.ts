import { AbstractElement } from "./AbstractElement";
import { BrElement } from "./BrElement";
import { H3Element } from "./H3Element";
import { UlElement } from "./UlElement";

export class DivElement extends AbstractElement {

    constructor() {
        super();
    }

    addChildren() {
        this.addChild(new H3Element('Yo DUDE!'));
        this.addChild(new BrElement());
        this.addChild(new UlElement());
    }

    createElement(): HTMLElement | null {
        return document.createElement('div');
    }

    defaultClasses(): string[] {
        return ['container-fluid'];
    }

}
