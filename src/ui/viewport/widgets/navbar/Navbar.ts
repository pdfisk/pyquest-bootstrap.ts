import { NavElement } from "../../../core/elements/NavElement";
import { NavbarContainer } from "./widgets/NavbarContainer";

export class Navbar extends NavElement {
    container?: NavbarContainer;
    static instance: Navbar;

    static getInstance(): Navbar {
        if (this.instance === undefined)
            this.instance = new Navbar;
        return this.instance;
    }

    private constructor() {
        super();
    }

    addChildren() {
        super.addChildren();
        this.container = new NavbarContainer;
        this.addChild(this.container);
    }

    defaultClasses(): string[] {
        const classes = [
            'navbar',
            'navbar-expand-lg',
            'bg-body-tertiary'
        ];
        return super.defaultClasses().concat(classes);
    }

    performAction(actionName: string, args: any = null): void {
        console.log('Navbar action', actionName);
    }

}
