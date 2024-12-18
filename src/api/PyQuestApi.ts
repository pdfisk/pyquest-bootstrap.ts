import { Viewport } from '../ui/viewport/Viewport';

export class PyQuestApi {

    static instance: PyQuestApi;

    static getInstance(): PyQuestApi {
        if (this.instance === undefined)
            this.instance = new PyQuestApi;
        return this.instance;
    }

    constructor() {
        Viewport.getInstance();
    }

}
