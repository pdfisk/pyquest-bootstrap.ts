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

    initialize() {
        super.initialize();
        this.textArea = new TextAreaElement;
        this.textArea.setPosition('absolute');
        this.textArea.setTop(0);
        this.textArea.setLeft(0);
        this.textArea.setRight(0);
        this.textArea.setBottom(0);
    }

}
