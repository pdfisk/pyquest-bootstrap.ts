export class Viewport {

    static instance: Viewport;

    static getInstance() {
        if (this.instance === undefined)
            this.instance = new Viewport();
        return this.instance;
    }

    constructor() {
        console.log('PYQUEST VIEWPORT');
    }

}
