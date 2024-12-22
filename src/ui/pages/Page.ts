import { StringUtil } from "../../util/StringUtil";
import { AbstractElement } from "../core/elements/AbstractElement";
import { DivElement } from "../core/elements/DivElement";
import { Card } from "../widgets/card/Card";
import { CardBody } from "../widgets/card/CardBody";
import { CardHeader } from "../widgets/card/CardHeader";
import { Pages } from "./Pages";

export class Page extends Card {
    body: CardBody | undefined;
    header: CardHeader | undefined;
    tag: string;

    constructor() {
        super();
        this.tag = this.createTag();
    }

    addChildren() {
        this.header = new CardHeader(this.defaultTitle());
        this.body = new CardBody;
        this.addChild(this.header);
        this.addChild(this.body);
        this.body.addChild(this.defaultContent());
    }

    addClasses() {
        super.addClasses();
        this.addClass('card');
    }

    createTag(): string {
        return StringUtil.asTag(this.defaultTitle());
    }

    defaultTitle(): string {
        return 'a Page'
    }

    defaultContent(): AbstractElement {
        return new DivElement();
    }

    performAction(actionName: string, args: any): void {
        switch (actionName) {
            case 'select_page':
                this.selectPage(args.tag);
                break;
            default:
                console.log('unknown action', actionName);
                break;
        }
    }

    selectPage(tag: string) {
        Pages.selectPage(tag);
    }

}
