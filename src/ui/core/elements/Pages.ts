import { FillContainer } from "./FlillContainer";
import { Page } from "./Page";

export class Pages extends FillContainer {
    childPages: Page[] = [];

    addPage(page: Page) {
        this.childPages.push(page);
        this.addChild(page);
    }

    initialize() {
        this.childPages = [];
    }

}
