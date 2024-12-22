import { StringUtil } from "../../util/StringUtil";
import { LiElement } from "../core/elements/LiElement";

export class ListItem extends LiElement {
    tag:string;

    constructor(text: string) {
        super(text);
        this.tag = StringUtil.asTag(text);
    }

    initialize() {
        super.initialize();
        this.addClickHandler();
    }

    onClickArgs(): any {
        const args = { tag: this.tag };
        return Object.assign(args, super.onClickArgs());
    }

}
