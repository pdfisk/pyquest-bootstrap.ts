import { Page } from "../Page";

export class BoardPage extends Page {
    static instance: BoardPage;

    static getInstance(): BoardPage {
        if (this.instance === undefined)
            this.instance = new BoardPage;
        return this.instance;
    }

    defaultTitle(): string {
        return 'Board';
    }

}
