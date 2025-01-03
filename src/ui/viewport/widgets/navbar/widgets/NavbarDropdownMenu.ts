import { UlElement } from "../../../../core/elements/UlElement";

export class NavbarDropdownMenu extends UlElement {

    constructor() {
        super();
    }

    defaultClasses(): string[] {
        const classes = ['dropdown-menu'];
        return super.defaultClasses().concat(classes);
    }

}
