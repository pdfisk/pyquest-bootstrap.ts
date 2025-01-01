import { AbstractElement } from "./AbstractElement";

export class TextAreaElement extends AbstractElement {
    deferredText: string = '';
    isReady: boolean = false;

    constructor() {
        super();
    }

    clear() {
        this.setValue('');
    }

    defaultClasses(): string[] {
        return super.defaultClasses().concat('font-monospace');
    }

    defaultTagName(): string {
        return 'textarea';
    }

    getValue(): string {
        if (!this.isReady)
            return '';
        return (this.element as any).value;
    }

    handlesOnReady(): boolean {
        return true;
    }

    onReady() {
        this.isReady = true;
        this.setValue(this.deferredText);
        this.deferredText = '';
    }

    setValue(value: string) {
        if (!this.isReady) {
            this.deferredText += value;
            return;
        }
        (this.element as any).value = value;
    }

    useAbsolutePositioning(): boolean {
        return true;
    }

}
