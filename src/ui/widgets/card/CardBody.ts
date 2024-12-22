import { FillContainer } from "../../containers/FlillContainer";

export class CardBody extends FillContainer {
 
    addClasses() {
        super.addClasses();
        this.addClass('card-body');
    }

}
