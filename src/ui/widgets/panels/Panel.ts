import { FluidContainer } from "../../containers/FluidContainer";

export class Panel extends FluidContainer {
 
    addClasses() {
        super.addClasses();
    }

    insetBottom():number {
        return 63;
    }

    setStyles() {
        super.setStyles();
        this.setPositionAbsoluteWithInsets();
    }

}
