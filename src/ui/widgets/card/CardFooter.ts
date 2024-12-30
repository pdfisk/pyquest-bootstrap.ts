import { FluidContainer } from "../../containers/FluidContainer";

export class CardFooter extends FluidContainer {

    constructor() {
        super();
        this.setBackgroundColor('#d3d3d3');
    }

    addClasses() {
        super.addClasses();
        this.addClass('card-footer');
        this.addClass('d-flex');
        this.addClass('flex-row');
        this.addClass('overflow-hidden');
    }

    insetTop(): number {
        return -1;
    }

    setStyles() {
        super.setStyles();
        this.setPositionAbsoluteWithInsets();
        this.setHeight(65);
        this.setBackgroundColor('blue');
    }

}
