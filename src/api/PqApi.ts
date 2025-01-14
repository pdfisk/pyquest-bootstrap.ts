import { Version } from '../constants/Version';
import { Viewport } from '../ui/viewport/Viewport';
import { EventManager } from '../util/EventManager';
import { VmApi } from './VmApi';

export class PqApi {

    static instance: PqApi;

    static getInstance(): PqApi {
        if (this.instance === undefined)
            this.instance = new PqApi;
        return this.instance;
    }

    static handleEvent(json64: string) {
        this.getInstance().handleEvent(json64);
    }

    static handleEvent2() {
        console.log('handleEvent2', arguments);
    }

    static timestamp(): string {
        return this.getInstance().timestamp();
    }

    static version(): string {
        return this.getInstance().version();
    }

    private constructor() {
        Viewport.getInstance();
    }

    handleEvent(json64: string) {
        const jsonStr = atob(json64);
        const args = JSON.parse(jsonStr);
        const elementId = args.id;
        const eventName = args.event;
        EventManager.handleEvent(elementId, eventName, args);
    }

    run(code: string) {
        VmApi.run(code);
    }

    timestamp(): string {
        return Version.timestamp;
    }

    version(): string {
        return Version.version;
    }

}
