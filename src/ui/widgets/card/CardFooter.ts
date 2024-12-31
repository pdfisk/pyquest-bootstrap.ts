import { SizeConstants } from "../../../constants/SizeConstants";
import { FluidContainer } from "../../containers/FluidContainer";

export class CardFooter extends FluidContainer {

    constructor() {
        super();
        this.setBackgroundColor('blue');
    }

    addClasses() {
        super.addClasses();
        this.addClass('card-footer');
        this.addClass('d-flex');
        this.addClass('flex-row');
        this.addClass('overflow-hidden');
    }

    addButtons() {
    }

    handlesOnReady(): boolean {
        return true;
    }

    insetTop(): number {
        return -1;
    }

    onReady() {
        super.onReady();
        // this.addButtons();
    }

    setStyles() {
        super.setStyles();
        this.setPositionAbsoluteWithInsets();
        this.setHeight(SizeConstants.pageFooterHeight);
    }

}
