import { AbstractPageFooter } from "../../../widgets/abstract/AbstractPageFooter";
import { EditorPage } from "../EditorPage";
import { EditorClearButton } from "./EditorClearButton";
import { EditorRunButton } from "./EditorRunButton";

export class EditorPageFooter extends AbstractPageFooter {
    clearButton?: EditorClearButton;
    parent: EditorPage;
    runButton?: EditorRunButton;

    constructor(parent: EditorPage) {
        super();
        this.parent = parent;
        this.clearButton = new EditorClearButton(this.parent);
        this.runButton = new EditorRunButton(this.parent);
        this.setBackgroundColor('peru');
    }

    addButtons() {
        this.addChild(this.runButton as EditorRunButton);
        this.addChild(this.clearButton as EditorClearButton);
    }

    onReady() {
        super.onReady();
        this.addButtons();
    }

}