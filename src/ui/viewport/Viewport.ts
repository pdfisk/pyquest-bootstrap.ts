import { RootElement } from "../core/elements/RootElement";

export class Viewport extends RootElement {

    static instance: Viewport;

    static getInstance() {
        if (this.instance === undefined)
            this.instance = new Viewport();
        return this.instance;
    }

    constructor() {
        super();
        console.log('VIEWPORT');
    }

}
