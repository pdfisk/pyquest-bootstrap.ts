import { ProjectsStore } from "../../../data/stores/ProjectsStore";
import { DataUtil } from "../../../util/DataUtil";
import { AbstractElement } from "../../core";
import { ListItem } from "../../widgets/list/ListItem";
import { Page } from "../Page";
import { ProjectsList } from "./widgets/ProjectsList";

export class ProjectsPage extends Page {
    list: ProjectsList | undefined;
    projectsStore: ProjectsStore;
    static instance: ProjectsPage;

    static getInstance(): ProjectsPage {
        if (this.instance === undefined)
            this.instance = new ProjectsPage;
        return this.instance;
    }

    constructor() {
        super();
        this.projectsStore = ProjectsStore.getInstance();
    }

    addListItem(title: string) {
        this.list?.addChild(this.createListItem(title));
    }

    clearList() {
        this.list?.removeAllChildren();
    }

    createListItem(title: string): ListItem {
        const listItem = new ListItem(title);
        return listItem;
    }

    defaultContent(): AbstractElement {
        this.list = new ProjectsList;
        return this.list;
    }

    defaultTitle(): string {
        return 'Projects';
    }

    handlerFn(): Function {
        return (records: any) => {
            this.clearList();
            const sortedRecords = DataUtil.sortByName(records.values().toArray());
            for (let record of sortedRecords) {
                const name = record.name;
                this.addListItem(name);
            }
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
