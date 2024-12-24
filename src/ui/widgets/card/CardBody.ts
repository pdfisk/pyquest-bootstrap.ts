import { FluidContainer } from "../../containers/FluidContainer";

export class CardBody extends FluidContainer {

    addClasses() {
        super.addClasses();
        this.addClass('card-body');
    }

    setStyles() {
        super.setStyles();
        this.setPosition('absolute');
        this.setBorder('1px solid red');
        this.setBottom(0);
        this.setTop(65);
        this.setLeft(0);
        this.setRight(0);
    }

}
