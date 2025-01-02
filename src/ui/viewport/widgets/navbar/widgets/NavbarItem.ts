import { LiElement } from "../../../../core/elements/LiElement";

export class NavbarItem extends LiElement {

    defaultClasses(): string[] {
        const classes = ['nav-item'];
        return super.defaultClasses().concat(classes);
    }

}
