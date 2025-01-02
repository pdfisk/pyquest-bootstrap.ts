import { FluidContainer } from "../../../../containers/FluidContainer";
import { NavbarCollapse } from "./NavbarCollapse";

export class NavbarContainer extends FluidContainer {
    collapse?: NavbarCollapse;

    addChildren() {
        super.addChildren();
        this.collapse = new NavbarCollapse;
        this.addChild(this.collapse);
    }

    defaultAbsolutePositioning(): boolean {
        return true;
    }

}
