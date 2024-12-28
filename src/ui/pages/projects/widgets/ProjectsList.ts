import { EventManager } from "../../../../util/EventManager";
import { List } from "../../../widgets/list/List";

export class ProjectsList extends List {

    constructor() {
        super();
        this.addClickHandler();
        EventManager.mapEvent(this.id, 'click', this.onClickFn);
    }

    onClickArgs(): any {
        const args = {
            event: 'click',
            action: 'select_project'
        };
        return Object.assign(args, this.onEventArgs());
    }

    onClickFn(a: any, b: any, c: any) {
        console.log(a, b, c);
    }

}
