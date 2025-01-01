import { LiElement } from "../../../../core/elements/LiElement";

export class NavbarItem extends LiElement {

    defaultClasses(): string[] {
        return super.defaultClasses().concat(['nav-item']);
    }

}
