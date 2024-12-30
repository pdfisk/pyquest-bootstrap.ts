import { ButtonElement } from "../../core/elements/ButtonElement";

export class Button extends ButtonElement {

    constructor(label: string) {
        super();
        this.setText(label);
    }

    addClasses() {
        super.addClasses();
        this.addClass('btn');
        this.addClass('btn-sm');
        this.addClass('btn-secondary');
    }

    addClickHandlerFn() {
        this.clickHandlerFn = (evt: any) => {
            const target = evt.target;
            const id = target.id;
            const text = target.textContent;
            this.onButtonClicked(id, text);
        };
    }

    onButtonClicked(id: string, text: string) {
    }

}
