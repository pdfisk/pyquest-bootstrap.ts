import { DivElement } from "../../../../core/elements/DivElement";
import { NavbarNav } from "./NavbarNav";

export class NavbarCollapse extends DivElement {
    navbarNav?: NavbarNav;

    addChildren() {
        super.addChildren();
        this.navbarNav = new NavbarNav;
        this.addChild(this.navbarNav);
    }

    defaultClasses(): string[] {
        return ['collapse', 'navbar-collapse'];
    }

}
