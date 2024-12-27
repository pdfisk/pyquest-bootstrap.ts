import { UlElement } from "../../core/elements/UlElement";

export class List extends UlElement {

    setStyles() {
        super.setStyles();
        this.setPosition('absolute');
        this.setBottom(0);
        this.setTop(0);
        this.setLeft(0);
        this.setRight(0);
        this.setOverflow('scroll');
    }

}
