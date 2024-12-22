import { EventProfile } from './EventProfile';

export class EventManager {
    profileMap: Map<string, EventProfile> = new Map;
    static instance: EventManager;

    static getInstance(): EventManager {
        if (this.instance === undefined)
            this.instance = new EventManager;
        return this.instance;
    }

    static handleEvent(elementId: string, eventName: string, args: any) {
        this.getInstance().handleEvent(elementId, eventName, args);
    }

    static mapEvent(elementId: string, eventName: string, fn: Function) {
        this.getInstance().mapEvent(elementId, eventName, fn);
    }

    private constructor() {
    }

    getOrCreateProfile(elementId: string): EventProfile | undefined {
        if (!this.profileMap.has(elementId))
            this.profileMap.set(elementId, new EventProfile(elementId));
        return this.profileMap.get(elementId);
    }

    handleEvent(elementId: string, eventName: string, args: any) {
        if (!this.profileMap.has(elementId)) return;
        const eventProfile = this.profileMap.get(elementId);
        eventProfile?.handleEvent(eventName, args);
    }

    mapEvent(elementId: string, eventName: string, fn: Function) {
        const eventProfile = this.getOrCreateProfile(elementId);
        eventProfile?.mapEvent(eventName, fn);
    }

    unMapEvent(elementId: string, eventName: string) {
        const eventProfile = this.getOrCreateProfile(elementId);
        eventProfile?.unMapEvent(eventName);
    }

}
