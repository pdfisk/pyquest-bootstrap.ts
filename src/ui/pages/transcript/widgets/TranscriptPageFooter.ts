import { AbstractPageFooter } from "../../../widgets/abstract/AbstractPageFooter";
import { TranscriptPage } from "../TranscriptPage";
import { TranscriptClearButton } from "./TranscriptClearButton";

export class TranscriptPageFooter extends AbstractPageFooter {
    clearButton: TranscriptClearButton | undefined;
    parent: TranscriptPage;

    constructor(parent: TranscriptPage) {
        super();
        this.parent = parent;
        this.clearButton = new TranscriptClearButton(this.parent);
        this.setBackgroundColor('peru');
    }

    addButtons() {
        this.addChild(this.clearButton as TranscriptClearButton);
    }

    onReady() {
        super.onReady();
        this.addButtons();
    }

}