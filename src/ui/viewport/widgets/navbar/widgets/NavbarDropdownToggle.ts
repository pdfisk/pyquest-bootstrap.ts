import { NavbarLink } from "./NavbarLink";

export class NavbarDropdownToggle extends NavbarLink {

    constructor(text: string) {
        super(text);
    }

    defaultAbsolutePositioning(): boolean {
        return true;
    }

    defaultClasses(): string[] {
        const classes = ['dropdown-toggle'];
        return super.defaultClasses().concat(classes);
    }

    handlesOnReady(): boolean {
        return true;
    }

    onReady() {
        super.onReady();
        this.setRole('button');
    }

}
