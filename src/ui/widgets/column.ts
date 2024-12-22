import { DivElement } from "../core/elements/DivElement";

export class Column extends DivElement {

    constructor(colspan: number) {
        super();
        this.addColumnClass(colspan);
    }

    addColumnClass(colspan: number) {
        this.addClass(`col-${colspan}`);
    }

}
