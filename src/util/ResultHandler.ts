export class ResultHandler {

    static getResultFn(): Function {
        return (result: any) => { this.handleResult(result); };
    }

    static handleResult(result: any) {
        console.log('HANDLE RESULT', result);
    }

}
