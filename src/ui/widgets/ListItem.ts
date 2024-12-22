import { LiElement } from "../core/elements/LiElement";

export class ListItem extends LiElement {

    constructor(text:string) {
        super(text);
    }

    initialize() {
        super.initialize();
        this.addClickHandler();
    }

}
