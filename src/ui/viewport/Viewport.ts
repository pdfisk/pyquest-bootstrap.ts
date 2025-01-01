import { BodyElement } from "../core/elements/BodyElement";
import { Page } from "../pages/Page";
import { Pages } from "../pages/Pages";
import { BoardPage } from "../pages/board/BoardPage";
import { EditorPage } from "../pages/editor/EditorPage";
import { HelpPage } from "../pages/help/HelpPage";
import { LoginPage } from "../pages/login/LoginPage";
import { ProjectsPage } from "../pages/projects/ProjectsPage";
import { StatusPage } from "../pages/status/StatusPage";
import { TopMenuPage } from "../pages/top_menu/TopMenuPage";
import { TranscriptPage } from "../pages/transcript/TranscriptPage";
import { ViewportContainer } from "./widgets/ViewportContainer";
import { ViewportNavbar } from "./widgets/navbar/ViewportNavbar";

export class Viewport {
    documentBody: BodyElement;
    pages: Pages;
    viewportContainer: ViewportContainer;
    viewportNavbar: ViewportNavbar;
    static instance: Viewport;

    static getInstance() {
        if (this.instance === undefined)
            this.instance = new Viewport;
        return this.instance;
    }

    private constructor() {
        this.viewportContainer = new ViewportContainer;
        this.viewportNavbar = new ViewportNavbar;
        this.documentBody = BodyElement.getInstance();
        this.pages = Pages.getInstance();
        this.viewportContainer.addChild(this.viewportNavbar);
        this.viewportContainer.addChild(this.pages);
        this.documentBody.addChild(this.viewportContainer);
        this.addPages();
        this.selectPage('projects');
    }

    addPage(page: Page) {
        this.pages.addPage(page);
    }

    addPages() {
        this.addPage(BoardPage.getInstance());
        this.addPage(EditorPage.getInstance());
        this.addPage(HelpPage.getInstance());
        this.addPage(LoginPage.getInstance());
        this.addPage(ProjectsPage.getInstance());
        this.addPage(StatusPage.getInstance());
        this.addPage(TopMenuPage.getInstance());
        this.addPage(TranscriptPage.getInstance());
    }

    selectPage(tag: string) {
        this.pages.selectPage(tag);
    }

}
