import { BodyElement } from "../core/elements/BodyElement";

export class Viewport {
    rootElement: BodyElement;
    static instance: Viewport;

    static getInstance() {
        if (this.instance === undefined)
            this.instance = new Viewport();
        return this.instance;
    }

    private constructor() {
        this.rootElement = BodyElement.getInstance();
        (window as any).X = this;
    }

}
