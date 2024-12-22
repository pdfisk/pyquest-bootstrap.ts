import { AbstractElement } from "../../core/elements/AbstractElement";
import { List } from "../../widgets/List";
import { ListItem } from "../../widgets/ListItem";
import { Page } from "../Page";

export class TopMenuPage extends Page {

    createList(): List {
        const ulElement = new List();
        ulElement.addChild(new ListItem('Projects'));
        ulElement.addChild(new ListItem('Editor'));
        ulElement.addChild(new ListItem('Transcript'));
        ulElement.addChild(new ListItem('Board'));
        ulElement.addChild(new ListItem('Status'));
        ulElement.addChild(new ListItem('Login'));
        ulElement.addChild(new ListItem('Help'));
        return ulElement;
    }

    defaultContent(): AbstractElement {
        return this.createList();
    }

    defaultTitle(): string {
        return 'TopMenu';
    }

}
