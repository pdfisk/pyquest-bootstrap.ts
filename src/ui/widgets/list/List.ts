import { UlElement } from "../../core/elements/UlElement";

export class List extends UlElement {

    addClasses() {
        super.addClasses();
        this.addClass('overflow-visible');
    }
    
}
