import { FillContainer } from "./FlillContainer";
import { Page } from "./Page";

export class Pages extends FillContainer {
    pageMap: Map<string, Page> = new Map;

    addPage(page: Page) {
        this.pageMap.set(page.tag, page);
        this.addChild(page);
    }

    hideAllPages() {
        for (let page of this.pageMap.values())
            page.hide();
    }

    selectPage(tag: string) {
        this.hideAllPages();
        if (this.pageMap.has(tag))
            this.pageMap.get(tag)?.show();
    }

}
