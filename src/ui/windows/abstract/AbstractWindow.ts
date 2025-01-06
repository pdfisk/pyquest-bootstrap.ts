import { SizeConstants } from "../../../constants/SizeConstants";
import { Desktop } from "../../viewport/widgets/desktop/Desktop";

export abstract class AbstractWindow {
    desktop: any;
    winbox: any;

    constructor() {
        this.desktop = Desktop.getInstance();
        const options: any = {
            root: this.desktop.element,
            top: SizeConstants.navbarHeight
        };
        (window as any).X = this;
        this.winbox = new (window as any).WinBox(
            this.defaultCaption(),
            options
        );
    }

    abstract defaultCaption(): string;

}