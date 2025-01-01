import { FluidContainer } from "../../containers/FluidContainer";

export class Panel extends FluidContainer {
 
    addClasses() {
        super.addClasses();
    }

    defaultAbsolutePositioning(): boolean {
        return true;
    }

}
