import { Viewport } from '../ui/viewport/Viewport';
import { EventManager } from '../util/EventManager';

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

    handleEvent(json64: string) {
        const jsonStr = atob(json64);
        const args = JSON.parse(jsonStr);
        const elementId = args.id;
        const eventName = args.event;
        EventManager.handleEvent(elementId, eventName, args);
    }

}
