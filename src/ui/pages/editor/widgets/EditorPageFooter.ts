import { CardFooter } from "../../../widgets/card/CardFooter";
import { EditorPage } from "../EditorPage";
import { EditorClearButton } from "./EditorClearButton";

export class EditorPageFooter extends CardFooter {
    clearButton: EditorClearButton | undefined;
    parent: EditorPage;

    constructor(parent: EditorPage) {
        super();
        this.parent = parent;
        this.clearButton = new EditorClearButton(this.parent);
        this.setBackgroundColor('peru');
    }

    addButtons() {
        this.addChild(this.clearButton as EditorClearButton);
    }

    onReady() {
        super.onReady();
        this.addButtons();
    }

}