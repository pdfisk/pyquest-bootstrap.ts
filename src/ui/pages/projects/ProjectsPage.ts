import { ProjectsStore } from "../../../data/stores/ProjectsStore";
import { DataUtil } from "../../../util/DataUtil";
import { AbstractElement } from "../../core";
import { List } from "../../widgets/list/List";
import { ListItem } from "../../widgets/list/ListItem";
import { Page } from "../Page";

export class ProjectsPage extends Page {
    list: List;
    projectsStore: ProjectsStore;

    constructor() {
        super();
        this.projectsStore = ProjectsStore.getInstance();
        (window as any).X = this;
    }

    addListItem(title: string) {
        this.list.addChild(this.createListItem(title));
    }

    clearList() {
        this.list.removeAllChildren();
    }

    createList(): List {
        return this.list = new List();
    }

    createListItem(title: string): ListItem {
        const listItem = new ListItem(title);
        return listItem;
    }

    defaultContent(): AbstractElement {
        return this.createList();
    }

    defaultTitle(): string {
        return 'Projects';
    }

    handlerFn(): Function {
        return (records: any) => {
            console.log('HANDLE RECORDS', records);
            // this.removeAllChildren();
            // const sortedRecords = DataUtil.sortByName(records);
            for (let record of records) {
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
        console.log('onReady', this.list);
        ProjectsStore.getJsonFn(this.handlerFn());
    }

}
