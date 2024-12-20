import { RootElement } from "../core/elements/RootElement";

export class Viewport {
    rootElement: RootElement;
    static instance: Viewport;

    static getInstance() {
        if (this.instance === undefined)
            this.instance = new Viewport();
        return this.instance;
    }

    private constructor() {
        this.rootElement = RootElement.getInstance();
        (window as any).X = this;
    }

}
