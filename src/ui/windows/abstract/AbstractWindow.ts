import { SizeConstants } from "../../../constants/SizeConstants";

export abstract class AbstractWindow {
    // desktop: any;
    winbox: any;

    constructor() {
        // this.desktop = Desktop.getInstance();
        const options: any = {
            class: 'modern',
            // root: this.desktop.element,
            top: SizeConstants.navbarHeight
        };
        this.winbox = new (window as any).WinBox(
            this.defaultCaption(),
            options
        );
    }

    abstract defaultCaption(): string;

}