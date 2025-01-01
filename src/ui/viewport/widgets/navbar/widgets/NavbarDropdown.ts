import { NavbarItem } from "./NavbarItem";

export class NavbarDropdown extends NavbarItem {

    defaultClasses(): string[] {
        return super.defaultClasses().concat(['dropdown']);
    }

}
