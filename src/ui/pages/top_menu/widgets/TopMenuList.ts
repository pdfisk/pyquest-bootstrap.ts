import { StringUtil } from "../../../../util/StringUtil";
import { List } from "../../../widgets/list/List";
import { Pages } from "../../Pages";

export class TopMenuList extends List {

    onListItemClicked(id: string, text: string) {
        const tag = StringUtil.asTag(text);
        Pages.selectPage(tag);
    }

}
