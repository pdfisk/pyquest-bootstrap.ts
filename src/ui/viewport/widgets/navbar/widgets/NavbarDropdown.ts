import { NavbarItem } from "./NavbarItem";

export class NavbarDropdown extends NavbarItem {

    defaultClasses(): string[] {
        const classes = ['dropdown'];
        return super.defaultClasses().concat(classes);
    }

}
