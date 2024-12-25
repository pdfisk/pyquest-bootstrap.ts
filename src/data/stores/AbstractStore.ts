export abstract class AbstractStore {
    records: any[] = [];

    abstract defaultFn(): Function;

    abstract defaultUrl(): string;

    getJson() {
        this.getJsonFn(this.defaultFn());
    }

    getJsonFn(fn: Function) {
        this.getJsonUrlUrlFn(this.defaultUrl(), fn);
    }

    getJsonUrlUrlFn(url: string, fn: Function) {
        const request = $.ajax({
            type: 'GET',
            url: url,
            contentType: 'application/json'
        });
        request.done((res) => {
            this.handleResult(res, fn);
        });
        request.fail((jqXHR) => {
            console.error(jqXHR)
        });
    }

    handleResult(records: any[], fn: Function) {
        this.records = records;
        if (fn) fn(this.records);
    }


}
