import { AnchorElement } from "../../../../core/elements/AnchorElement";
import { NavbarDropdown } from "./NavbarDropdown";

export class NavbarLink extends AnchorElement {
    dropdown?: NavbarDropdown;

    defaultClasses(): string[] {
        return super.defaultClasses().concat(['navbar-link']);
    }

}
