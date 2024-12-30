import { Button } from "../../../widgets/buttons/Button";
import { TranscriptPage } from "../TranscriptPage";

export class TranscriptClearButton extends Button {
    parent: TranscriptPage;

    constructor(parent: TranscriptPage) {
        super('Clear');
        this.parent = parent;
    }

    onButtonClicked(id: string, text: string) {
        this.parent.clear()
    }

}
