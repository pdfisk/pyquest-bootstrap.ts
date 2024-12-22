import { EventManager } from "../../../util/EventManager";
import { AbstractElement } from "../../core/elements/AbstractElement";
import { List } from "../../widgets/List";
import { ListItem } from "../../widgets/ListItem";
import { Page } from "../Page";

export class TopMenuPage extends Page {

    createList(): List {
        const list = new List();
        list.addChild(this.createListItem('Projects'));
        list.addChild(this.createListItem('Editor'));
        list.addChild(this.createListItem('Transcript'));
        list.addChild(this.createListItem('Board'));
        list.addChild(this.createListItem('Status'));
        list.addChild(this.createListItem('Login'));
        list.addChild(this.createListItem('Help'));
        return list;
    }

    createListItem(title: string): ListItem {
        const listItem = new ListItem(title);
        const args = listItem.onClickArgs();
        const fn = (args: any) => { console.log('ABC', args) };
        EventManager.mapEvent(listItem.id, 'click', fn);
        return listItem;
    }

    defaultContent(): AbstractElement {
        return this.createList();
    }

    defaultTitle(): string {
        return 'TopMenu';
    }

}
