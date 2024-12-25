export abstract class AbstractStore {

    abstract defaultFn(): Function;
    abstract defaultUrl(): string;

    getJson() {
        this.getJsonFn(this.defaultFn());
    }

    getJsonFn(fn: Function) {
        this.getJsonUrlUrlFn(this.defaultUrl(), fn);
    }

    getJsonUrlUrlFn(url: string, fn: Function) {
        console.log('getJson', url);
    }

}
