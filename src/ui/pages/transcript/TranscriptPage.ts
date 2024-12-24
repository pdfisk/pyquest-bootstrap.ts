import { AbstractElement } from "../../core";
import { TextAreaElement } from "../../core/elements/TextAreaElement";
import { Page } from "../Page";

export class TranscriptPage extends Page {
    textArea?: TextAreaElement;

    constructor() {
        super();
        (window as any).X = this;
    }

    defaultContent(): AbstractElement {
        this.textArea = new TextAreaElement;
        this.textArea.setFullSize();
        return this.textArea;
    }

    defaultTitle(): string {
        return 'Transcript';
    }

}
