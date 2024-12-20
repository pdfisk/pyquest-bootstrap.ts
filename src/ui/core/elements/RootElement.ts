import { AbstractElement } from "./AbstractElement";
import { H3Element } from "./H3Element";

export class RootElement extends AbstractElement {
    static instance: RootElement;

    static getInstance(): RootElement {
        if (this.instance === undefined)
            this.instance = new RootElement;
        return this.instance;
    }

    private constructor() {
        super();
        window.onload = () => { this.onLoad(); }
    }

    addChildren() {
        this.addChild(new H3Element('Yo DUDE!'));
    }

    createElement(): HTMLElement | null {
        return null;
    }

    defaultClasses(): string[] {
        return ['container-fluid', 'd-flex', 'flex-container'];
    }

    onLoad() {
        this.element = document.body;
        this.addClasses();
        this.renderChildren();
        this.setProperties();
    }

    setProperties() {
        super.setProperties();
    }

}
