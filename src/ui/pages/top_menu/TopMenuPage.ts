import { ElementRegistry } from "../../../util/ElementRegistry";
import { EventManager } from "../../../util/EventManager";
import { AbstractElement } from "../../core/elements/AbstractElement";
import { List } from "../../widgets/list/List";
import { ListItem } from "../../widgets/list/ListItem";
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
        listItem.addClickHandler();
        const args = listItem.onClickArgs();
        args.action = 'select_page';
        args.page_id = this.id;
        const fn = this.createSelectPageFn(args);
        EventManager.mapEvent(listItem.id, 'click', fn);
        return listItem;
    }

    createSelectPageFn(args: any): Function {
        return () => {
            const element = ElementRegistry.find(args.id);
            if (!element || !('performAction' in element)) return;
            element.performAction(args.action, args);
        };
    }

    defaultContent(): AbstractElement {
        return this.createList();
    }

    defaultTitle(): string {
        return 'TopMenu';
    }

    showTopMenuButton(): boolean {
        return false;
    }

}
