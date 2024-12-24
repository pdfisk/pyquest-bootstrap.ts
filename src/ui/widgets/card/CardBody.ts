import { FillContainer } from "../../containers/FlillContainer";

export class CardBody extends FillContainer {

    addClasses() {
        super.addClasses();
        this.addClass('card-body');
    }

    setStyles() {
        super.setStyles();
        this.setPosition('absolute');
        this.setTop(0);
        this.setRight(0);
        this.setBottom(200);
        this.setLeft(0);
    }

}
