import { UrlConstants } from "../../constants/UrlConstants";
import { AbstractStore } from "./AbstractStore";

export class ProjectsStore extends AbstractStore {
    static instance: ProjectsStore;

    static getInstance(): ProjectsStore {
        if (this.instance === undefined)
            this.instance = new ProjectsStore;
        return this.instance;
    }

    static getJson() {
        this.getInstance().getJson();
    }

    static getJsonFn(fn: Function) {
        this.getInstance().getJsonFn(fn);
    }

    defaultFn(): Function {
        return (reply: any) => {
            console.log('AJAX REPLY');
        };
    }

    defaultUrl(): string {
        if (location.hostname === 'localhost')
            return UrlConstants.localProjects;
        else return UrlConstants.remoteProjects;
    }

    getCompareFn(): any {
        return (a: any, b: any) => {
            if (a.name > b.name)
                return 1;
            if (a.name < b.name)
                return -1;
            return 0;
        }
    }

}
