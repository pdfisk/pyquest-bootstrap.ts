import { AbstractElement } from "../core/elements/AbstractElement";
import { LiElement } from "../core/elements/LiElement";
import { Page } from "../core/elements/Page";
import { UlElement } from "../core/elements/UlElement";

export class TopMenuPage extends Page {

    createUlElement(): UlElement {
        const ulElement = new UlElement();
        ulElement.addChild(new LiElement('Projects'));
        ulElement.addChild(new LiElement('Editor'));
        ulElement.addChild(new LiElement('Transcript'));
        ulElement.addChild(new LiElement('Board'));
        ulElement.addChild(new LiElement('Status'));
        ulElement.addChild(new LiElement('Login'));
        ulElement.addChild(new LiElement('Help'));
        return ulElement;
    }

    defaultContent(): AbstractElement {
        return this.createUlElement();
    }

    defaultTitle(): string {
        return 'TopMenu';
    }

}
