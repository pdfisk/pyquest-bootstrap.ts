import { FillContainer } from "../../containers/FlillContainer";

export class Card extends FillContainer {
 
    addClasses() {
        super.addClasses();
        this.addClass('card');
        this.addClass('overflow-hidden');
    }

    setStyles() {
        super.setStyles();
        this.setPosition('relative');
    }

}
