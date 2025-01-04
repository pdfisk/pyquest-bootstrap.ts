import { NavbarDropdownMenu } from "./NavbarDropdownMenu";
import { NavbarDropdownToggle } from "./NavbarDropdownToggle";
import { NavbarItem } from "./NavbarItem";

export class NavbarDropdown extends NavbarItem {
    menu?:NavbarDropdownMenu;
    toggle?: NavbarDropdownToggle;

    addChildren() {
        super.addChildren();
        this.menu = new NavbarDropdownMenu;
        this.toggle = new NavbarDropdownToggle('Top Menu');
        this.addChild(this.toggle);
        this.addChild(this.menu);
    }

    // defaultAbsolutePositioning(): boolean {
    //     return true;
    // }

    defaultClasses(): string[] {
        const classes = ['dropdown'];
        return super.defaultClasses().concat(classes);
    }

}
