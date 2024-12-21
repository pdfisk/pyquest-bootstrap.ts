import { AbstractElement } from "../../core/elements/AbstractElement";
import { BrElement } from "../../core/elements/BrElement";
import { DivElement } from "../../core/elements/DivElement";
import { FillContainer } from "../../containers/FlillContainer";
import { H3Element } from "../../core/elements/H3Element";

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
        return this.defaultTitle().replace(' ', '_').toLowerCase();
    }

    defaultTitle(): string {
        return 'a Page'
    }

    defaultContent(): AbstractElement {
        return new DivElement();
    }

}
