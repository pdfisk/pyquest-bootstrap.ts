import { ColorConstants } from "../../../constants/ColorConstants";
import { CardFooter } from "../../widgets/card/CardFooter";

export class AbstractPageFooter extends CardFooter {

    constructor() {
        super();
        this.setBackgroundColor(ColorConstants.lightGray);
    }

}
