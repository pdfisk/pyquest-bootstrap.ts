import { DivElement } from "../../../../core/elements/DivElement";

export class NavbarCollapse extends DivElement {
 
    addClasses() {
        super.addClasses();
        this.addClass('collapse');
        this.addClass('navbar-collapse');
    }

}
