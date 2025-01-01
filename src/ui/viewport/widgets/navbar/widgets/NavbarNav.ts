import { UlElement } from "../../../../core/elements/UlElement";
import { NavbarDropdown } from "./NavbarDropdown";

export class NavbarNav extends UlElement {
    dropdown?:NavbarDropdown;

    addChildren() {
        super.addChildren();
        this.dropdown = new NavbarDropdown;
this
    }

    defaultClasses(): string[] {
        return ['navbar-nav'];
    }

}
