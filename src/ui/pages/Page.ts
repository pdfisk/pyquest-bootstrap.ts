import { StringUtil } from "../../util/StringUtil";
import { FillContainer } from "../containers/FlillContainer";
import { AbstractElement } from "../core/elements/AbstractElement";
import { BrElement } from "../core/elements/BrElement";
import { DivElement } from "../core/elements/DivElement";
import { H3Element } from "../core/elements/H3Element";
import { Pages } from "./Pages";

export class Page extends FillContainer {
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

    createTag(): string {
        return StringUtil.asTag(this.defaultTitle());
    }

    defaultTitle(): string {
        return 'a Page'
    }

    defaultContent(): AbstractElement {
        return new DivElement();
    }

    selectPage(tag: string) {
        Pages.selectPage(tag);
    }

}
