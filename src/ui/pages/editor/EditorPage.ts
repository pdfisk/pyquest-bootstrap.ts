import { AbstractElement } from "../../core";
import { AceEditor } from "../../widgets/ace/AceEditor";
import { CardFooter } from "../../widgets/card/CardFooter";
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

    createCardFooter(): CardFooter {
        return new EditorPageFooter(this);
    }

    defaultContent(): AbstractElement {
        this.aceEditor = new AceEditor;
        return this.aceEditor;
    }

    defaultTitle(): string {
        return 'Editor';
    }

    getValue():string {
       return this.aceEditor?.getValue();
    }

    setValue(text: string) {
        this.aceEditor?.setValue(text);
    }

}
