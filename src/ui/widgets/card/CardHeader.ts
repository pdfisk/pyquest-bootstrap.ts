import { FluidContainer } from "../../containers/FluidContainer";
import { H3Element } from "../../core/elements/H3Element";
import { Column } from "../column";
import { Row } from "../row";

export class CardHeader extends FluidContainer {

    constructor(title: string, buttonLabel: string | null = null) {
        super();
        this.addTitleRow(title);
    }

    addClasses() {
        super.addClasses();
        this.addClass('card-header');
    }

    addTitleRow(title: string) {
        const row = new Row;
        const column = new Column(10);
        const h3 = new H3Element(title);
        h3.addClass('w-75');
        h3.addClass('p-3');
        column.addChild(h3);
        row.addChild(column);
        this.addChild(row);
    }

}
