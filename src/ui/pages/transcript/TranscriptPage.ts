import { AbstractElement } from "../../core";
import { TextPanel } from "../../widgets/panels/TextPanel";
import { Page } from "../Page";

export class TranscriptPage extends Page {
    textPanel?: TextPanel;

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

}
