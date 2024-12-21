import { BodyElement } from "../core/elements/BodyElement";
import { Page } from "../pages/core/Page";
import { Pages } from "../pages/core/Pages";
import { BoardPage } from "../pages/BoardPage";
import { EditorPage } from "../pages/EditorPage";
import { HelpPage } from "../pages/HelpPage";
import { LoginPage } from "../pages/LoginPage";
import { StatusPage } from "../pages/StatusPage";
import { TopMenuPage } from "../pages/TopMenuPage";
import { TranscriptPage } from "../pages/TranscriptPage";

export class Viewport {
    bodyElement: BodyElement;
    pages: Pages;
    static instance: Viewport;

    static getInstance() {
        if (this.instance === undefined)
            this.instance = new Viewport();
        return this.instance;
    }

    private constructor() {
        this.bodyElement = BodyElement.getInstance();
        this.pages = Pages.getInstance();
        this.bodyElement.addChild(this.pages);
        this.addPages();
        (window as any).X = this;
    }

    addPage(page: Page) {
        this.pages.addPage(page);
    }

    addPages() {
        this.addPage(new BoardPage);
        this.addPage(new EditorPage);
        this.addPage(new HelpPage);
        this.addPage(new LoginPage);
        this.addPage(new StatusPage);
        this.addPage(new TopMenuPage);
        this.addPage(new TranscriptPage);
    }

    selectPage(tag: string) {
        this.pages.selectPage(tag);
    }

}
