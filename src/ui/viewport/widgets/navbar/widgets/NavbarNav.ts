import { UlElement } from "../../../../core/elements/UlElement";
import { NavbarItemLink } from "./NavbarItemLink";

export class NavbarNav extends UlElement {
    boardItem?: NavbarItemLink;
    editorItem?: NavbarItemLink;
    helpItem?: NavbarItemLink;
    homeItem?: NavbarItemLink;
    loginItem?: NavbarItemLink;
    projectsItem?: NavbarItemLink;
    statusItem?: NavbarItemLink;
    transcriptItem?: NavbarItemLink;

    addChildren() {
        super.addChildren();
        this.boardItem = new NavbarItemLink('Board');
        this.editorItem = new NavbarItemLink('Editor');
        this.helpItem = new NavbarItemLink('Help');
        this.homeItem = new NavbarItemLink('Home');
        this.loginItem = new NavbarItemLink('Login');
        this.projectsItem = new NavbarItemLink('Projects');
        this.statusItem = new NavbarItemLink('Status');
        this.transcriptItem = new NavbarItemLink('Transcript');
        this.addChild(this.homeItem);
        this.addChild(this.projectsItem);
        this.addChild(this.editorItem);
        this.addChild(this.transcriptItem);
        this.addChild(this.boardItem);
        this.addChild(this.statusItem);
        this.addChild(this.helpItem);
        this.addChild(this.loginItem);
    }

    defaultClasses(): string[] {
        const classes = ['navbar-nav'];
        return super.defaultClasses().concat(classes);
    }

}
