import { AbstractElement } from "../../core";
import { TextAreaElement } from "../../core/elements/TextAreaElement";
import { AceEditor } from "../../widgets/ace/aceEditor";
import { Page } from "../Page";

export class EditorPage extends Page {
    aceEditor?: AceEditor;
    // textArea?: TextAreaElement;

    constructor() {
        super();
    }

    // defaultContent(): AbstractElement {
    //     this.textArea = new TextAreaElement;
    //     this.textArea.setPosition('absolute');
    //     this.textArea.setTop(0);
    //     this.textArea.setRight(0);
    //     this.textArea.setBottom(0);
    //     this.textArea.setLeft(0);
    //     return this.textArea;
    // }

    defaultContent():AbstractElement {
        this.aceEditor = new AceEditor;
        return this.aceEditor;
    }

    defaultTitle(): string {
        return 'Editor';
    }

    setValue(text: string) {
        this.aceEditor?.setValue(text);
        this.aceEditor?.setPosition('absolute');
        this.aceEditor?.setTop(0);
        this.aceEditor?.setRight(0);
        this.aceEditor?.setBottom(0);
        this.aceEditor?.setLeft(0);
}

}
