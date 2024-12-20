import { AbstractElement } from "./AbstractElement";
import { BrElement } from "./BrElement";
import { H3Element } from "./H3Element";
import { UlElement } from "./UlElement";

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
        this.addChild(new BrElement());
        this.addChild(new UlElement());
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
