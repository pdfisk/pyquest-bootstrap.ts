import { NavElement } from "../../../core/elements/NavElement";
import { WinBox } from "../../../core/winbox/winbox";
import { BoardWindow } from "../../../windows/board/BoardWindow";
import { EditorWindow } from "../../../windows/editor/EditorWindow";
import { HelpWindow } from "../../../windows/help/HelpWindow";
import { LoginWindow } from "../../../windows/login/LoginWindow";
import { ProjectsWindow } from "../../../windows/projects/ProjectsWindow";
import { StatusWindow } from "../../../windows/status/StatusWindow";
import { TransciptWindow } from "../../../windows/transcript/TranscriptWindow";
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
        switch (actionName) {
            case 'board':
                new BoardWindow;
                break;
            case 'editor':
                new EditorWindow;
                break;
            case 'help':
                new HelpWindow;
                break;
            case 'home':
                new WinBox;
                break;
            case 'login':
                new LoginWindow;
                break;
            case 'projects':
                new ProjectsWindow;
                break;
            case 'status':
                new StatusWindow;
                break;
            case 'transcript':
                new TransciptWindow;
                break;
            default:
                console.log('Navbar action', actionName);
                break;
        }
    }

}
