import { SizeConstants } from "../../../../constants/SizeConstants";
import { NavElement } from "../../../core/elements/NavElement";
import { NavbarContainer } from "./widgets/NavbarContainer";

export class Navbar extends NavElement {
    container?: NavbarContainer;

    constructor() {
        super();
    }

    addChildren() {
        super.addChildren();
        this.container = new NavbarContainer;
        this.addChild(this.container);
    }

    defaultAbsolutePositioning(): boolean {
        return true;
    }

    defaultBottom(): number {
        return -SizeConstants.navbarHeight;
    }

    defaultClasses(): string[] {
        const classes = [
            'navbar',
            'navbar-light',
            'bg-light'
        ];
        return super.defaultClasses().concat(classes);
    }

}
