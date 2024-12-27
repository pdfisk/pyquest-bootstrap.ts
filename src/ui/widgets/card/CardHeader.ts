import { FluidContainer } from "../../containers/FluidContainer";
import { H3Element } from "../../core/elements/H3Element";
import { TopMenuButton } from "../buttons/TopMenuButton";

export class CardHeader extends FluidContainer {

    constructor(title: string, buttonLabel: string | null = null) {
        super();
        this.setBackgroundColor('#d3d3d3');
        this.addTitle(title);
    }

    addClasses() {
        super.addClasses();
        this.addClass('card-header');
        this.addClass('d-flex');
        this.addClass('flex-row');
        this.addClass('overflow-hidden');
    }

    addTitle(title: string) {
        const leftContainer = new FluidContainer;
        leftContainer.addClass('flex-fill');
        leftContainer.addClass('flex-row');
        const h3 = new H3Element(title);
        leftContainer.addChild(h3);
        this.addChild(leftContainer);
    }

    addTopMenuButton() {
        const rightContainer = new FluidContainer;
        rightContainer.addClass('flex-fill')
        rightContainer.addClass('flex-row');
        const button = new TopMenuButton();
        button.addClass('float-end');
        rightContainer.addChild(button);
        this.addChild(rightContainer);
    }

}
