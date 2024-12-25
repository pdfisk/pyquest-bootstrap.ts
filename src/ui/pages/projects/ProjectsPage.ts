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

    handlesOnReady(): boolean {
        return true;
    }

    onReady() {
        super.onReady();
        ProjectsStore.getJson();
    }

}
