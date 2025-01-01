import { SizeConstants } from "../../../constants/SizeConstants";
import { FluidContainer } from "../../containers/FluidContainer";

export class ViewportNavbar extends FluidContainer {

    defaultAbsolutePositioning(): boolean {
        return true;
    }

    defaultBackgroundColor(): string {
        return 'blue';
    }

    insetBottom(): number {
        return -SizeConstants.navbarHeight;
    }

}
