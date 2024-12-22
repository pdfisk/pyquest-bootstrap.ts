import { ElementRegistry } from "../../util/ElementRegistry";
import { StringUtil } from "../../util/StringUtil";
import { LiElement } from "../core/elements/LiElement";
import { Page } from "../pages/Page";

export class ListItem extends LiElement {
    tag: string;

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

    performAction(actionName: string, args: any): void {
        switch (actionName) {
            case 'select_page':
                this.performActionSelectPage(args);
                break;
            default:
                console.log('ListItem performAction', actionName, args);
                break;
        }
    }

    performActionSelectPage(args: any) {
        const tag: string = args.tag;
        const page_id: string = args.page_id;
        const page = ElementRegistry.find(page_id);
        if (page instanceof Page)
            (page as Page).selectPage(tag);
        console.log('performActionSelectPage', args);
    }

}
