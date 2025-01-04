import { NavbarItem } from "./NavbarItem";
import { NavbarLink } from "./NavbarLink";

export class NavbarItemLink extends NavbarItem {
    link?: NavbarLink;

    constructor(text: string) {
        super();
        this.link = new NavbarLink(text);
        this.addChild(this.link);
    }

    handlesOnReady(): boolean {
        return true;
    }

    onReady() {
        super.onReady();
        this.link?.setHref('#');
    }

}
