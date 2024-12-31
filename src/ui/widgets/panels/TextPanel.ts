import { TextAreaElement } from "../../core/elements/TextAreaElement";
import { Panel } from "./Panel";

export class TextPanel extends Panel {
    textArea?: TextAreaElement;

    constructor() {
        super();
    }

    addChildren() {
        super.addChildren();
        if (this.textArea)
            this.addChild(this.textArea);
    }

    clear() {
        this.textArea?.clear();
    }

    initialize() {
        super.initialize();
        this.textArea = new TextAreaElement;
        this.setPositionAbsoluteWithInsets();
    }

    prn(text: string) {
        const oldText = this.textArea?.getValue();
        const newText = `${oldText}${text}\n`;
        this.textArea?.setValue(newText);
    }

    setStyles() {
        super.setStyles();
        this.textArea?.setPositionAbsoluteWithInsets();
    }

}
