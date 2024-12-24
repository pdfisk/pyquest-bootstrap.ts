import { FluidContainer } from "../../containers/FluidContainer";

export class Panel extends FluidContainer {
 
    addClasses() {
        super.addClasses();
    }

    setStyles() {
        super.setStyles();
        this.setPosition('absolute');
        this.setTop(0);
        this.setRight(0);
        this.setBottom(63);
        this.setLeft(0);
        this.setBorder('5px solid slategray');
    }

}
