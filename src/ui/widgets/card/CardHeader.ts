import { FluidContainer } from "../../containers/FluidContainer";
import { H3Element } from "../../core/elements/H3Element";
import { Button } from "../buttons/Button";
import { Column } from "../column";
import { Row } from "../row";

export class CardHeader extends FluidContainer {
    titleRow: Row;

    constructor(title: string, buttonLabel: string | null = null) {
        super();
        this.titleRow = new Row;
        this.addTitleRow(title);
    }

    addClasses() {
        super.addClasses();
        this.addClass('card-header');
        this.addClass('d-flex');
        this.addClass('flex-row');
        this.addClass('bd-highlight');
    }

    addTitleRow(title: string) {
        // const column = new Column(10);
        const leftContainer = new FluidContainer;
        leftContainer.addClass('flex-fill');
        leftContainer.addClass('flex-row');
        leftContainer.setBackgroundColor('orange');
        const h3 = new H3Element(title);
        leftContainer.addChild(h3);
        this.addChild(leftContainer);
        // h3.addClass('w-75');
        // h3.addClass('p-3');
        // column.addChild(h3);
        // this.titleRow.addChild(column);
        // this.addChild(this.titleRow);
    }

    addTopMenuButton() {
        // const column = new Column(2);
        const rightContainer = new FluidContainer;
        rightContainer.setBackgroundColor('honeydew');
        rightContainer.addClass('flex-fill')
        rightContainer.addClass('flex-row');
        const button = new Button('Top Menu');
        button.addClass('float-end');
        rightContainer.addChild(button);
        this.addChild(rightContainer);
        // this.titleRow.addChild(column);
    }

}
