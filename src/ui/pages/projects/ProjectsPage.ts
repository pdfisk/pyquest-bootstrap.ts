import { ProjectsStore } from "../../../data/stores/ProjectsStore";
import { Page } from "../Page";

export class ProjectsPage extends Page {
    projectsStore: ProjectsStore;

    constructor() {
        super();
        this.projectsStore = ProjectsStore.getInstance();
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
