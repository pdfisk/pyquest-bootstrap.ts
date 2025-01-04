import { AnchorElement } from "../../../../core/elements/AnchorElement";
import { NavbarDropdown } from "./NavbarDropdown";

export class NavbarLink extends AnchorElement {

    constructor(text: string) {
        super(text);
    }

    defaultClasses(): string[] {
        const classes = ['nav-link'];
        return super.defaultClasses().concat(classes);
    }

}
