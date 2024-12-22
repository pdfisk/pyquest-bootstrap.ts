import { ButtonElement } from "../../core/elements/ButtonElement";

export class Button extends ButtonElement {

    constructor(label: string) {
        super();
        this.setText(label);
    }

    addClasses() {
        super.addClasses();
        this.addClass('btn');
        this.addClass('btn-secondary');
    }

}
