import { StringUtil } from "../../../../../util/StringUtil";
import { Navbar } from "../Navbar";
import { NavbarItem } from "./NavbarItem";
import { NavbarLink } from "./NavbarLink";

export class NavbarItemLink extends NavbarItem {
    link?: NavbarLink;

    constructor(text: string) {
        super();
        this.link = new NavbarLink(text);
        this.addChild(this.link);
    }

    addClickHandlerFn() {
        this.clickHandlerFn = (evt: any) => {
            const text = this.link?.getText();
            const action:string = StringUtil.asTag(text as string);
            Navbar.getInstance().performAction(action);
        };
    }

    handlesOnReady(): boolean {
        return true;
    }

    onReady() {
        super.onReady();
        this.link?.setHref('#');
    }

}
