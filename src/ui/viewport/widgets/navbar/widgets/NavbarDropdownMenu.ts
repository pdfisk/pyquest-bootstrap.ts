import { UlElement } from "../../../../core/elements/UlElement";
import { NavbarDropdownMenuItem } from "./NavbarDropdownMenuItem";

export class NavbarDropdownMenu extends UlElement {

    addChildren() {
        super.addChildren();
        this.addChild(new NavbarDropdownMenuItem('Projects'));
        this.addChild(new NavbarDropdownMenuItem('Editor'));
        this.addChild(new NavbarDropdownMenuItem('Transcript'));
        this.addChild(new NavbarDropdownMenuItem('Board'));
        this.addChild(new NavbarDropdownMenuItem('Status'));
        this.addChild(new NavbarDropdownMenuItem('Help'));
    }

    addClickHandlerFn() {
        console.log('ADD TOGGLE');
        this.clickHandlerFn = (evt: any) => {
            console.log('TOGGLE');
            this.toggle();
        };
    }

    defaultAbsolutePositioning(): boolean {
        return false;
    }

    defaultClasses(): string[] {
        const classes = ['dropdown-menu'];
        return super.defaultClasses().concat(classes);
    }

    isOpen(): boolean {
        return this.hasClass('show');
    }

    menuClose() {
        this.removeClass('show');
    }

    menuOpen() {
        this.addClass('show');
    }

    toggle() {
        if (this.isOpen())
            this.menuClose();
        else
            this.menuOpen();
    }

}
