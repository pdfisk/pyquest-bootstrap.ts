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

    defaultClasses(): string[] {
        const classes = ['list-group'];
        return super.defaultClasses().concat(classes);
    }

    onListItemClicked(id: string, text: string) {
        console.log('onListItemClicked', id, text);
    }

    setStyles() {
        super.setStyles();
        this.setOverflow('scroll');
    }

    defaultAbsolutePositioning(): boolean {
        return true;
    }

}
