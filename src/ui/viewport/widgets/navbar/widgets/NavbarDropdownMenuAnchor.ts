import { AnchorElement } from "../../../../core/elements/AnchorElement";

export class NavbarDropdownMenuAnchor extends AnchorElement {

    constructor(text: string) {
        super(text);
    }

    defaultClasses(): string[] {
        const classes = ['dropdown-item'];
        return super.defaultClasses().concat(classes);
    }

}
