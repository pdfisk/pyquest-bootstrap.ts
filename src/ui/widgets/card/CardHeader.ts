import { DivElement } from "../../core/elements/DivElement";
import { H3Element } from "../../core/elements/H3Element";

export class CardHeader extends DivElement {

    constructor(title: string) {
        super();
        this.addChild(new H3Element(title));
    }

    addClasses() {
        super.addClasses();
        this.addClass('card-header');
    }

}
