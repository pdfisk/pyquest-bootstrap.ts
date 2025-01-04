import { StringUtil } from "../../util/StringUtil";
import { AbstractElement } from "../core/elements/AbstractElement";
import { DivElement } from "../core/elements/DivElement";
import { AbstractPageFooter } from "../widgets/abstract/AbstractPageFooter";
import { Card } from "../widgets/card/Card";
import { CardBody } from "../widgets/card/CardBody";
import { CardHeader } from "../widgets/card/CardHeader";
import { Pages } from "./Pages";

export class Page extends Card {
    body: CardBody | undefined;
    footer: AbstractPageFooter | undefined;
    header: CardHeader | undefined;
    tag: string;

    constructor() {
        super();
        this.tag = this.createTag();
    }

    addChildren() {
        this.header = this.createCardHeader(this.defaultTitle());
        if (this.showTopMenuButton())
            this.header.addTopMenuButton();
        this.body = this.createCardBody();
        this.footer = this.createPageFooter();
        this.addChild(this.header);
        this.addChild(this.body);
        this.addChild(this.footer);
        this.body.addChild(this.defaultContent());
    }

    addClasses() {
        super.addClasses();
        this.addClass('card');
    }

    createCardBody(): CardBody {
        return new CardBody;
    }

    createCardHeader(caption: string): CardHeader {
        return new CardHeader(caption);
    }

    createPageFooter(): AbstractPageFooter {
        return new AbstractPageFooter;
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

    handlesOnReady(): boolean {
        return true;
    }

    performAction(actionName: string, args: any=null): void {
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

    showTopMenuButton(): boolean {
        return true;
    }

}
