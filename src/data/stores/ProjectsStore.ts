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

    defaultFn(): Function {
        return () => { console.log(arguments) };
    }

    defaultUrl(): string {
        return 'http:9080/api/projects';
    }

}
