import { Widget } from "../core";

export class Viewport extends Widget {

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
