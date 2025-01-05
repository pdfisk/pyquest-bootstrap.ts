import { AbstractElement } from "..";

export class Helper {

    static addClass(node: AbstractElement, className: string) {
        node.addClass(className);
    }

    static addListener(node: AbstractElement, event: string, fn: Function, opt: boolean = false) {
        node.addEventHandler(event, fn);
    }

    static getByClass(root: any, name: string): any {
        return root.getElementsByClassName(name)[0];
    }

    static hasClass(node: AbstractElement, className: string): boolean {
        return node.hasClass(className);
    }

    static preventEvent(event: any, prevent: boolean) {
        event.stopPropagation();
        if (prevent)
            event.preventDefault();
    }

    static removeAttribute(node: AbstractElement, name: string) {
        node.removeAttribute(name);
    }

    static removeClass(node: AbstractElement, className: string) {
        node.removeClass(className);
    }

    static removeListener(node: AbstractElement, event: string, fn: Function, opt: boolean = false) {
        node.removeEventHandler(event);
    }

    static setAttribute(node: AbstractElement, name: string, value: any) {
        node.setAttribute(name, value);
    }

    static setStyle(node: AbstractElement, style: string, value: any) {
        node.setStyle(style, value);
    }

    static setText(node: AbstractElement, text: string) {
        node.setText(text);
    }

}

