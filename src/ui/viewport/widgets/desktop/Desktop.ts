import { SizeConstants } from "../../../../constants/SizeConstants";
import { DivElement } from "../../../core/elements/DivElement";

export class Desktop extends DivElement {
    static instance: Desktop;

    static getInstance(): Desktop {
        if (this.instance === undefined)
            this.instance = new Desktop;
        return this.instance;
    }

    private constructor() {
        super();
    }

    defaultAbsolutePositioning(): boolean {
        return true;
    }

    defaultBackgroundColor(): string {
        return '#cfcfcf';
    }

    defaultBorderTop(): string {
        return '1px solid slategray';
    }

    defaultTop(): number {
        return SizeConstants.navbarHeight;
    }

}
