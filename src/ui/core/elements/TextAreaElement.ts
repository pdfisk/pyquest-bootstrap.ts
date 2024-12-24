import { AbstractElement } from "./AbstractElement";

export class TextAreaElement extends AbstractElement {
    deferredText: string = '';
    isReady:boolean = false;

    constructor() {
        super();
    }

    defaultTagName(): string {
        return 'textarea';
    }

    getValue(): string {
        if (!this.isReady)
            return '';
        return (this.element as any).textContent;
    }

    handlesOnReady(): boolean {
        return true;
    }

    onReady() {
        console.log('onReady', this.deferredText);
        this.isReady = true;
        this.setValue(this.deferredText);
        this.deferredText = '';
    }

    setValue(value: string) {
        if (!this.isReady) {
            this.deferredText += value;
            return;
        }
        (this.element as any).textContent = value;
    }

}
