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

    defaultTop(): number {
        return -SizeConstants.pageFooterHeight;
    }

    handlesOnReady(): boolean {
        return true;
    }

    onReady() {
        super.onReady();
        // this.addButtons();
    }

    defaultAbsolutePositioning(): boolean {
        return true;
    }

}
