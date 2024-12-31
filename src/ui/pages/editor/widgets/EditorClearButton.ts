import { SizeConstants } from "../../../../constants/SizeConstants";
import { Button } from "../../../widgets/buttons/Button";
import { EditorPage } from "../EditorPage";

export class EditorClearButton extends Button {
    parent: EditorPage;

    constructor(parent: EditorPage) {
        super('Clear');
        this.parent = parent;
        this.setRightMargin(SizeConstants.pageFooterButtonRightMargin);
    }

    onButtonClicked(id: string, text: string) {
        this.parent.clear();
    }

}
