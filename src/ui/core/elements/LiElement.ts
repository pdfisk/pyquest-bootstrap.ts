import { AbstractElement } from "./AbstractElement";

export class LiElement extends AbstractElement {

    defaultTagName(): string {
        return 'li';
    }

}
