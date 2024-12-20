import { BodyElement } from "../core/elements/BodyElement";
import { EditorPage } from "../core/elements/EditorPage";
import { Page } from "../core/elements/Page";
import { Pages } from "../core/elements/Pages";
import { TopMenuPage } from "../pages/TopMenuPage";

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
        this.pages.selectPage('editor');
        (window as any).X = this;
    }

    addPage(page: Page) {
        this.pages.addPage(page);
    }

    addPages() {
        this.addPage(new EditorPage);
        this.addPage(new TopMenuPage);
    }

}
