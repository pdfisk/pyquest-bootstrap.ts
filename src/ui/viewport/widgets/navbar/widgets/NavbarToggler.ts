import { ButtonElement } from "../../../../core/elements/ButtonElement";
import { NavbarTogglerIcon } from "./NavbarTogglerIcon";

export class NavbarToggler extends ButtonElement {
    icon?: NavbarTogglerIcon;

    addChildren() {
        super.addChildren();
        this.icon = new NavbarTogglerIcon;
        this.addChild(this.icon);
    }

    defaultClasses(): string[] {
        const classes = ['navbar-toggler'];
        return super.defaultClasses().concat(classes);
    }

    handlesOnReady(): boolean {
        return true;
    }

    onReady() {
        super.onReady();
        this.setType('button');
        this.setDataBsToggle('collapse');
    }

}
