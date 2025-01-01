import { SizeConstants } from "../../../../constants/SizeConstants";
import { FluidContainer } from "../../../containers/FluidContainer";
import { NavElement } from "../../../core/elements/NavElement";

export class ViewportNavbar extends NavElement {
    container?: FluidContainer;

    constructor() {
        super();
    }

    addChildren() {
        super.addChildren();
        if (this.container)
            this.addChild(this.container);
    }

    defaultAbsolutePositioning(): boolean {
        return true;
    }

    initialize() {
        super.initialize();
        this.container = new FluidContainer;
    }

    insetBottom(): number {
        return -SizeConstants.navbarHeight;
    }

}
