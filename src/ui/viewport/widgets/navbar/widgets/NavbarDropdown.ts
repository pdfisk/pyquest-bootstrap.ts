import { NavbarDropdownToggle } from "./NavbarDropdownToggle";
import { NavbarItem } from "./NavbarItem";

export class NavbarDropdown extends NavbarItem {
    toggle?: NavbarDropdownToggle;

    addChildren() {
        super.addChildren();
        this.toggle = new NavbarDropdownToggle('Top Menu');
        this.addChild(this.toggle);
    }

    defaultClasses(): string[] {
        const classes = ['dropdown'];
        return super.defaultClasses().concat(classes);
    }

}
