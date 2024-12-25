import { ProjectsStore } from "../../../data/stores/ProjectsStore";
import { AbstractElement } from "../../core";
import { List } from "../../widgets/list/List";
import { Page } from "../Page";

export class ProjectsPage extends Page {
    list:List|null = null;
    projectsStore: ProjectsStore;

    constructor() {
        super();
        this.projectsStore = ProjectsStore.getInstance();
    }

    defaultContent(): AbstractElement {
        if (!this.list)
            this.list = new List;
        return this.list;
    }

    defaultTitle(): string {
        return 'Projects';
    }

    handlerFn(): Function {
        return (reply: any) => {
            console.log('Projects Page handlerFn');
            (window as any).X = reply;
        };
    }

    handlesOnReady(): boolean {
        return true;
    }

    onReady() {
        super.onReady();
        ProjectsStore.getJsonFn(this.handlerFn());
    }

}
