import { UlElement } from "../../core/elements/UlElement";

export class List extends UlElement {

    addClickHandlerFn() {
        this.clickHandlerFn = (evt: any) => {
            const target = evt.target;
            const id = target.id;
            const text = target.textContent;
            this.onListItemClicked(id, text);
        };
    }

    onListItemClicked(id: string, text: string) {
        console.log('onListItemClicked', id, text);
    }

    setStyles() {
        super.setStyles();
        this.setPosition('absolute');
        this.setBottom(0);
        this.setTop(0);
        this.setLeft(0);
        this.setRight(0);
        this.setOverflow('scroll');
    }

}
