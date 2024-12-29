import { Page } from "../Page";

export class LoginPage extends Page {
    static instance: LoginPage;

    static getInstance(): LoginPage {
        if (this.instance === undefined)
            this.instance = new LoginPage;
        return this.instance;
    }

    defaultTitle(): string {
        return 'Login';
    }

}
