import { DivElement } from "../core/elements/DivElement";
import { RootElement } from "../core/elements/RootElement";

export class Viewport extends DivElement {
    rootElement: RootElement;
    static instance: Viewport;

    static getInstance() {
        if (this.instance === undefined)
            this.instance = new Viewport();
        return this.instance;
    }

    private constructor() {
        super();
        this.rootElement = RootElement.getInstance();
        console.log('VIEWPORT');
        (window as any).X = this;
    }

}
