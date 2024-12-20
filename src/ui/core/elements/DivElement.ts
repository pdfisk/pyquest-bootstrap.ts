import { AbstractElement } from "./AbstractElement";

export class DivElement extends AbstractElement {

    constructor() {
        super();
        console.log('creating div');
    }

    createElement(): HTMLElement | null {
        return document.createElement('div');
    }

    defaultClasses():string[] {
        return ['container-fluid'];
    }

    setProperties() {
        super.setProperties();
        this.setBorder('10px solid gray');
        this.setHeight(250);
        this.setBackgroundColor('peru');
    }

}
