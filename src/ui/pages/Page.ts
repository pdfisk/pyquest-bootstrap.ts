import { StringUtil } from "../../util/StringUtil";
import { AbstractElement } from "../core/elements/AbstractElement";
import { BrElement } from "../core/elements/BrElement";
import { DivElement } from "../core/elements/DivElement";
import { H3Element } from "../core/elements/H3Element";
import { Card } from "../widgets/Card";
import { Pages } from "./Pages";

export class Page extends Card {
    tag: string;

    constructor() {
        super();
        this.tag = this.createTag();
    }

    addChildren() {
        this.addChild(new H3Element(this.defaultTitle()));
        this.addChild(new BrElement());
        this.addChild(this.defaultContent());
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
