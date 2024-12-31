import { Button } from "../../../widgets/buttons/Button";
import { EditorPage } from "../EditorPage";

export class EditorRunButton extends Button {
    parent: EditorPage;

    constructor(parent: EditorPage) {
        super('Run');
        this.parent = parent;
        this.setRightMargin(10);
    }

    onButtonClicked(id: string, text: string) {
        const code = this.parent.getValue();
        console.log('RUN CODE', code);
    }

}
