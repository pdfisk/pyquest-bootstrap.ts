import { DivElement } from "../core/elements/DivElement";

export class Row extends DivElement {
 
    addClasses() {
        super.addClasses();
        this.addClass('row');
    }

}
