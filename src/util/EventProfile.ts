export class EventProfile {
    eventMap: Map<string, Function> = new Map;
    id: string

    constructor(id: string) {
        this.id = id;
    }

    handleEvent(eventName: string, args: any) {
        console.log('EventProfile handleEvent', eventName, args);
        if (!this.eventMap.has(eventName))
            return;
        const fn: Function | undefined = this.eventMap.get(eventName);
        if (fn instanceof Function)
            fn.call(null, args);
    }

    mapEvent(eventName: string, fn: Function) {
        this.eventMap.set(eventName, fn);
    }

    unMapEvent(eventName: string) {
        this.eventMap.delete(eventName);
    }

}
