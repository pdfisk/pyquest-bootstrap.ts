import { FillContainer } from "../containers/FlillContainer";
import { Page } from "./Page";

export class Pages extends FillContainer {
    pageMap: Map<string, Page> = new Map;
    static instance: Pages;

    static getInstance(): Pages {
        if (this.instance === undefined)
            this.instance = new Pages;
        return this.instance;
    }

    static selectPage(tag: string): Page | undefined {
        return this.getInstance().selectPage(tag);
    }

    static selectTopMenu() {
        this.selectPage('topmenu');
    }

    addPage(page: Page) {
        this.pageMap.set(page.tag, page);
        this.addChild(page);
    }

    hideAllPages() {
        for (let page of this.pageMap.values())
            page.hide();
    }

    selectPage(tag: string): Page | undefined {
        this.hideAllPages();
        if (this.pageMap.has(tag)) {
            const page = this.pageMap.get(tag);
            (page as Page).show();
            return page;
        }
        return undefined;
    }

}
