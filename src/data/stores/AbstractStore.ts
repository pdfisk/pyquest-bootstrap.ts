import { StringUtil } from "../../util/StringUtil";

export abstract class AbstractStore {
    records: Map<string, any> = new Map;

    asArray(): any[] {
        return (this.records.values() as any).toArray();
    }

    asSortedArray(): any[] {
        return this.asArray().sort(this.getCompareFn());
    }

    abstract defaultFn(): Function;

    abstract defaultUrl(): string;

    getCompareFn(): any {
        return (a: any, b: any) => { return 0; }
    }

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
        console.log('HANDLE RESULT', records);
        (window as any).X = [this, fn, records];
        this.records.clear();
        for (let record of records)
            this.records.set(StringUtil.asTag(record.name), record);
        if (fn) fn(this.asSortedArray());
    }


}
