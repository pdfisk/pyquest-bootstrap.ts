import { AbstractElement } from "../ui";

export class ElementRegistry {
    elementMap: Map<string, AbstractElement> = new Map;
    static instance: ElementRegistry;

    static find(elementId: string): AbstractElement | undefined {
        return this.getInstance().find(elementId);
    }

    static register(element: AbstractElement) {
        this.getInstance().register(element);
    }

    static unregister(elementId: string) {
        this.getInstance().unregister(elementId);
    }

    static getInstance(): ElementRegistry {
        if (this.instance === undefined)
            this.instance = new ElementRegistry;
        return this.instance;
    }

    private constructor() {
    }

    find(elementId: string): AbstractElement | undefined {
        return this.elementMap.get(elementId);
    }

    register(element: AbstractElement) {
        this.elementMap.set(element.id, element);
    }

    unregister(elementId: string) {
        this.elementMap.delete(elementId);
    }

}
