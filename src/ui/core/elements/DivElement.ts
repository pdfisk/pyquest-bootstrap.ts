import { AbstractElement } from "./AbstractElement";

export class DivElement extends AbstractElement {

    constructor() {
        super();
        console.log('creating div');
    }

    createElement(): HTMLElement | null {
        return document.createElement('div');
    }

    setProperties() {
        super.setProperties();
        this.setWidth(350);
        this.setHeight(250);
        this.setBackgroundColor('peru');
    }

}
