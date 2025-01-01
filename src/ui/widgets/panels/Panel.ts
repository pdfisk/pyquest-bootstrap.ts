import { FluidContainer } from "../../containers/FluidContainer";

export class Panel extends FluidContainer {
 
    addClasses() {
        super.addClasses();
    }

    useAbsolutePositioning(): boolean {
        return true;
    }

}
