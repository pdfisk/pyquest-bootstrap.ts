import { AbstractElement } from "../../core";
import { TextPanel } from "../../widgets/panels/TextPanel";
import { Page } from "../Page";

export class TranscriptPage extends Page {
    textPanel?: TextPanel;
    static instance: TranscriptPage;

    static getInstance(): TranscriptPage {
        if (this.instance === undefined)
            this.instance = new TranscriptPage;
        return this.instance;
    }

    static prn(text: string) {
        this.getInstance().prn(text);
    }

    constructor() {
        super();
    }

    defaultContent(): AbstractElement {
        this.textPanel = new TextPanel;
        return this.textPanel;
    }

    defaultTitle(): string {
        return 'Transcript';
    }

    prn(text: string) {
        this.textPanel?.prn(text);
    }

}
