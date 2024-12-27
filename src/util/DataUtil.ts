export class DataUtil {

    static sortByName(records: any): any {
        const compareFn = (a: any, b: any) => {
            if (a.name > b.name)
                return 1;
            if (a.name < b.name)
                return -1;
            return 0;
        }
        return records.sort(compareFn);
    }

}
