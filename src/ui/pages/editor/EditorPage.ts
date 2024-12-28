import { AbstractElement } from "../../core";
import { TextAreaElement } from "../../core/elements/TextAreaElement";
import { Page } from "../Page";

export class EditorPage extends Page {
    textArea?: TextAreaElement;

    constructor() {
        super();
    }

    defaultContent(): AbstractElement {
        this.textArea = new TextAreaElement;
        this.textArea.setPosition('absolute');
        this.textArea.setTop(0);
        this.textArea.setRight(0);
        this.textArea.setBottom(0);
        this.textArea.setLeft(0);
        return this.textArea;
    }

    defaultTitle(): string {
        return 'Editor';
    }

    setValue(text: string) {
        this.textArea?.setValue(text);
    }

}
