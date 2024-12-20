import { AbstractElement } from "./AbstractElement";
import { BrElement } from "./BrElement";
import { DivElement } from "./DivElement";
import { FillContainer } from "./FlillContainer";
import { H3Element } from "./H3Element";

export class Page extends FillContainer {

    addChildren() {
        this.addChild(new H3Element(this.defaultTitle()));
        this.addChild(new BrElement());
        this.addChild(this.defaultContent());
    }

    defaultTitle(): string {
        return 'a Page'
    }

    defaultContent():AbstractElement {
        return new DivElement();
    }

}
