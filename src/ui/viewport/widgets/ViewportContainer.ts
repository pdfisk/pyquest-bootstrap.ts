import { FluidContainer } from "../../containers/FluidContainer";

export class ViewportContainer extends FluidContainer {

    defaultAbsolutePositioning(): boolean {
        return true;
    }

    defaultBackgroundColor(): string {
        return 'red';
    }

}
