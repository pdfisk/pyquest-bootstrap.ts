import { FluidContainer } from "./FluidContainer";

export class FillContainer extends FluidContainer {

    defaultClasses(): string[] {
        const classes = ['h-100'];
        return super.defaultClasses().concat(classes);
    }

}
