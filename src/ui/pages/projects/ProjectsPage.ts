import { ProjectsStore } from "../../../data/stores/ProjectsStore";
import { DataUtil } from "../../../util/DataUtil";
import { AbstractElement } from "../../core";
import { List } from "../../widgets/list/List";
import { ListItem } from "../../widgets/list/ListItem";
import { Page } from "../Page";

export class ProjectsPage extends Page {
    list: List | undefined;
    projectsStore: ProjectsStore;

    constructor() {
        super();
        this.projectsStore = ProjectsStore.getInstance();
        (window as any).X = this;
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
        this.list = new List
        return this.list;
    }

    defaultTitle(): string {
        return 'Projects';
    }

    handlerFn(): Function {
        return (records: any) => {
            this.list?.removeAllChildren();
            const sortedRecords = DataUtil.sortByName(records);
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
