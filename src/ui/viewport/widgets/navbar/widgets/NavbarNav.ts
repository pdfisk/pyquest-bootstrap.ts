import { UlElement } from "../../../../core/elements/UlElement";
import { NavbarDropdown } from "./NavbarDropdown";

export class NavbarNav extends UlElement {
    dropdown?:NavbarDropdown;

    addChildren() {
        super.addChildren();
        this.dropdown = new NavbarDropdown;
    }

    defaultClasses(): string[] {
        const classes = ['navbar-nav'];
        return super.defaultClasses().concat(classes);
    }

}
