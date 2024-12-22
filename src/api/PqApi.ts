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

    handleEvent(args: any) {
        const elementId = args.id;
        const eventName = args.event;
        EventManager.handleEvent(elementId, eventName, args);
    }

}
