import { AbstractElement } from "../../core";
import { AceEditor } from "../../widgets/ace/aceEditor";
import { Page } from "../Page";

export class EditorPage extends Page {
    aceEditor?: AceEditor;
    static instance: EditorPage;

    static getInstance(): EditorPage {
        if (this.instance === undefined)
            this.instance = new EditorPage;
        return this.instance;
    }

    constructor() {
        super();
    }

    defaultContent(): AbstractElement {
        this.aceEditor = new AceEditor;
        return this.aceEditor;
    }

    defaultTitle(): string {
        return 'Editor';
    }

    onReady() {
        super.onReady();
        this.aceEditor?.setAbsolutePosition();
    }

    setValue(text: string) {
        this.aceEditor?.setValue(text);
    }

}
