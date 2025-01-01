import { AbstractElement } from "./AbstractElement";

export class NavElement extends AbstractElement {

    defaultClasses(): string[] {
        return [
            'navbar',
            'navbar-light',
            'bg-light'
        ];
    }

    defaultTagName(): string {
        return 'nav';
    }

}
