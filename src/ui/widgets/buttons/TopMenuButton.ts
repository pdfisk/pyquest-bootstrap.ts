import { EventManager } from "../../../util/EventManager";
import { Pages } from "../../pages/Pages";
import { Button } from "./Button";

export class TopMenuButton extends Button {

    constructor() {
        super('Top Menu');
        const fn = () => { Pages.selectTopMenu(); };
        EventManager.mapEvent(this.id, 'click', fn);
        this.addClickHandler();
    }

}
