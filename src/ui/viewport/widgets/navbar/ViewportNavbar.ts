import { SizeConstants } from "../../../../constants/SizeConstants";
import { NavElement } from "../../../core/elements/NavElement";

export class ViewportNavbar extends NavElement {

    defaultAbsolutePositioning(): boolean {
        return true;
    }

    insetBottom(): number {
        return -SizeConstants.navbarHeight;
    }

}
