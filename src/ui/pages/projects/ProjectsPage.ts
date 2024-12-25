import { ProjectsStore } from "../../../data/stores/ProjectsStore";
import { AbstractElement } from "../../core";
import { List } from "../../widgets/list/List";
import { ListItem } from "../../widgets/list/ListItem";
import { Page } from "../Page";

export class ProjectsPage extends Page {
    projectsStore: ProjectsStore;

    constructor() {
        super();
        this.projectsStore = ProjectsStore.getInstance();
    }

    addListItem(title: string) {
        const list = this.getList();
        list.addChild(this.createListItem(title));
    }

    createList(): List {
        const list = new List();
        list.addChild(this.createListItem('00_one'));
        list.addChild(this.createListItem('00_two'));
        return list;
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

    getList(): List {
        return this.body?.children.at(0) as List;
    }

    handlerFn(): Function {
        return (records: any) => {
            console.log('HANDLE RECORDS', records);
            (window as any).X = [this, records];
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
        ProjectsStore.getJsonFn(this.handlerFn());
    }

}
