import { FluidContainer } from "../../containers/FluidContainer";
import { H3Element } from "../../core/elements/H3Element";
import { Button } from "../buttons/Button";
import { Column } from "../column";
import { Row } from "../row";

export class CardHeader extends FluidContainer {
    titleRow:Row;

    constructor(title: string, buttonLabel: string | null = null) {
        super();
        this.titleRow = new Row;
        this.addTitleRow(title);
    }

    addClasses() {
        super.addClasses();
        this.addClass('card-header');
    }

    addTitleRow(title: string) {
        const column = new Column(10);
        const h3 = new H3Element(title);
        h3.addClass('w-75');
        h3.addClass('p-3');
        column.addChild(h3);
        this.titleRow.addChild(column);
        this.addChild(this.titleRow);
    }

    addTopMenuButton() {
        const column = new Column(2);
        column.addClass('float-right');
        const button = new Button('Top Menu');
        column.addChild(button);
        this.titleRow.addChild(column);
    }

}
