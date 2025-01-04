import { AnchorElement } from "../../../../core/elements/AnchorElement";

export class NavbarBrand extends AnchorElement {

    constructor() {
        super('PyQuest')
    }

    defaultClasses(): string[] {
        const classes = ['navbar-brand'];
        return super.defaultClasses().concat(classes);
    }

    handlesOnReady(): boolean {
        return true;
    }

    onReady() {
        super.onReady();
        this.setHref('#');
    }

}
