import { LiElement } from "../../../../core/elements/LiElement";
import { NavbarDropdownMenuAnchor } from "./NavbarDropdownMenuAnchor";

export class NavbarDropdownMenuItem extends LiElement {
    menuAnchor?: NavbarDropdownMenuAnchor;

    constructor(text: string) {
        super();
        this.menuAnchor = new NavbarDropdownMenuAnchor(text);
    }

    handlesOnReady(): boolean {
        return true;
    }

    onReady() {
        super.onReady();
        if (this.menuAnchor)
            this.addChild(this.menuAnchor);
    }

}
