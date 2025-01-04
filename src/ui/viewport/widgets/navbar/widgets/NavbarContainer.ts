import { FluidContainer } from "../../../../containers/FluidContainer";
import { NavbarBrand } from "./NavbarBrand";
import { NavbarCollapse } from "./NavbarCollapse";
import { NavbarToggler } from "./NavbarToggler";

export class NavbarContainer extends FluidContainer {
    brand?: NavbarBrand;
    collapse?: NavbarCollapse;
    toggler?: NavbarToggler;

    addChildren() {
        super.addChildren();
        this.brand = new NavbarBrand;
        this.collapse = new NavbarCollapse;
        this.toggler = new NavbarToggler;
        this.addChild(this.brand);
        this.addChild(this.toggler);
        this.addChild(this.collapse);
    }

    handlesOnReady(): boolean {
        return true;
    }

    onReady() {
        super.onReady();
        this.toggler?.setDataBsTarget(`${this.collapse?.id}`);
    }
 
}
