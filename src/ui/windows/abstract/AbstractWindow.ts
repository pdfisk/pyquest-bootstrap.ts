export abstract class AbstractWindow {
    winbox: any;

    constructor() {
        this.winbox = new (window as any).WinBox(this.defaultCaption());
    }

    abstract defaultCaption(): string;

}