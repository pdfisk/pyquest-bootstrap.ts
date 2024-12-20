import { BodyElement } from "../core/elements/BodyElement";

export class Viewport {
    bodyElement: BodyElement;
    static instance: Viewport;

    static getInstance() {
        if (this.instance === undefined)
            this.instance = new Viewport();
        return this.instance;
    }

    private constructor() {
        this.bodyElement = BodyElement.getInstance();
        (window as any).X = this;
    }

}
