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
        const classes = ['collapse', 'navbar-collapse'];
        return super.defaultClasses().concat(classes);
    }

    setCollapsed(collapsed: boolean) {
        if (collapsed)
            this.addClass('collapse');
        else
            this.removeClass('collapes');
    }

}
