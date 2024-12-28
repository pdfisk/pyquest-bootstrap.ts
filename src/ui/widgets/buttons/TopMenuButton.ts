import { EventManager } from "../../../util/EventManager";
import { Pages } from "../../pages/Pages";
import { Button } from "./Button";

export class TopMenuButton extends Button {

    constructor() {
        super('Top Menu');
    }

    onButtonClicked(id: string, text: string) {
        Pages.selectTopMenu();
    }

}
