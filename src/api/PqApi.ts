import { Viewport } from '../ui/viewport/Viewport';

export class PqApi {

    static instance: PqApi;

    static getInstance(): PqApi {
        if (this.instance === undefined)
            this.instance = new PqApi;
        return this.instance;
    }

    constructor() {
        Viewport.getInstance();
    }

    handleEvent(argStr: string) {
        console.log('handleEvent', argStr);
    }

}
