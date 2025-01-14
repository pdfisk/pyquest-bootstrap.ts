import { AbstractElement } from "../../core";
import { AbstractPageFooter } from "../../widgets/abstract/AbstractPageFooter";
import { AceEditor } from "../../widgets/ace/AceEditor";
import { Page } from "../Page";
import { EditorPageFooter } from "./widgets/EditorPageFooter";

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

    clear() {
        this.setValue('');
    }

    createPageFooter(): AbstractPageFooter {
        return new EditorPageFooter(this);
    }

    defaultContent(): AbstractElement {
        this.aceEditor = new AceEditor;
        return this.aceEditor;
    }

    defaultTitle(): string {
        return 'Editor';
    }

    getValue(): string {
        const text = this.aceEditor?.getValue();
        if (text !== undefined)
            return text;
        return '';
    }

    run() {
        const code = this.getValue();
        (window as any).pq_api.run(code);
    }

    setValue(text: string) {
        this.aceEditor?.setValue(text);
    }

}
