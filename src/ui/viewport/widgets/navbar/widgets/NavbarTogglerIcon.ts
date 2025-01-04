import { SpanElement } from "../../../../core/elements/SpanElement";

export class NavbarTogglerIcon extends SpanElement {

    defaultClasses(): string[] {
        const classes = ['navbar-toggler-icon'];
        return super.defaultClasses().concat(classes);
    }

}
