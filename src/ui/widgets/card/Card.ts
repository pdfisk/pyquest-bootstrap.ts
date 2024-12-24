import { FillContainer } from "../../containers/FlillContainer";

export class Card extends FillContainer {
 
    addClasses() {
        super.addClasses();
        this.addClass('card');
    }

    setStyles() {
        super.setStyles();
        this.setPosition('relative');
    }

}
