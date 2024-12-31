import { Pages } from "../ui/pages/Pages";

export class ActionHandler {

    static handleAction(args: any[]) {
        const action: string = args.shift();
        this.performAction(action, args);
    }

    static performAction(action: string, args: any[]) {
        switch (action) {
            case 'autotab':
                this.performAutotab(args)
                break;
            default:
                console.log('performAction', action, args);
                break;
        }
    }

    static performAutotab(args: any[]) {
        const tag: string = args.shift();
        Pages.selectPage(tag);
    }

}
