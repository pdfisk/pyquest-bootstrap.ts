import { DivElement } from "../core/elements/DivElement";

export class FluidContainer extends DivElement {

    defaultClasses(): string[] {
        const classes = ['container-fluid'];
        return super.defaultClasses().concat(classes);
    }

}
