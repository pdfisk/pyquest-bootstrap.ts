import { AnchorElement } from "../../../../core/elements/AnchorElement";
import { NavbarDropdown } from "./NavbarDropdown";

export class NavbarLink extends AnchorElement {
    dropdown?: NavbarDropdown;

    constructor(text: string) {
        super(text);
    }

    defaultClasses(): string[] {
        const classes = ['navbar-link'];
        return super.defaultClasses().concat(classes);
    }

}
