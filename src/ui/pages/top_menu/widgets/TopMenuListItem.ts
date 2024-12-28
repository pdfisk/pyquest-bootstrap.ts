import { ListItem } from "../../../widgets/list/ListItem";

export class TopMenuListItem extends ListItem {

    initialize() {
        super.initialize();
        this.addClickHandler();
    }
    
}
