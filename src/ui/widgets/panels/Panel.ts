import { FluidContainer } from "../../containers/FluidContainer";

export class Panel extends FluidContainer {
 
    addClasses() {
        super.addClasses();
    }

    setStyles() {
        super.setStyles();
        this.setPositionAbsoluteWithInsets();
    }

}
