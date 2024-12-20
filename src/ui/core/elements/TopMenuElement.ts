import { BrElement } from "./BrElement";
import { FluidContainer } from "./FluidContainer";
import { H3Element } from "./H3Element";
import { LiElement } from "./LiElement";
import { UlElement } from "./UlElement";

export class TopMenuElement extends FluidContainer {

    addChildren() {
        this.addChild(new H3Element('Top Menu'));
        this.addChild(new BrElement());
        this.addChild(this.createUlElement());
    }

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

}
