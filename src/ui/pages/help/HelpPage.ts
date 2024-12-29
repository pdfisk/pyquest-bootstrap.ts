import { Page } from "../Page";

export class HelpPage extends Page {
    static instance: HelpPage;

    static getInstance(): HelpPage {
        if (this.instance === undefined)
            this.instance = new HelpPage;
        return this.instance;
    }

    defaultTitle(): string {
        return 'Help';
    }

}
