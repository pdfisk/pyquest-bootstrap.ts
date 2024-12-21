import { FluidContainer } from "./FluidContainer";

export class FillContainer extends FluidContainer {

    defaultClasses(): string[] {
        return ['h-100'].concat(super.defaultClasses());
    }

}
