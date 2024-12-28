import { ProjectsStore } from "../../../../data/stores/ProjectsStore";
import { List } from "../../../widgets/list/List";
import { EditorPage } from "../../editor/EditorPage";
import { Pages } from "../../Pages";

export class ProjectsList extends List {

    constructor() {
        super();
    }

    onListItemClicked(id: string, text: string) {
        const record = ProjectsStore.getRecord(text);
        const code: string = record.code;
        const page = Pages.selectPage('editor');
        if (page !== undefined)
            (page as EditorPage).setValue(code);
    }

}
