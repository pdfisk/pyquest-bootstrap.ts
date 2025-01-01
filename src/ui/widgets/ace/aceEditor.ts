import { DivElement } from "../../core/elements/DivElement";

export class AceEditor extends DivElement {
    ace: any;
    editor: any;
    initialValue: string = '';

    constructor() {
        super();
    }

    getValue(): string {
        if (this.editor)
            return this.editor.getValue();
        return '';
    }

    handlesOnReady(): boolean {
        return true;
    }

    onReady() {
        const options = {
            highlightActiveLine: true,
            mode: 'ace/mode/python'
        };
        this.ace = (window as any).ace;
        this.editor = (window as any).ace.edit(this.element, options);
        this.setValue(this.initialValue);
        this.initialValue = '';
    }

    setLine(line: number) {
        if (this.editor)
            this.editor.moveCursorTo(line - 1, 0);
    }

    setRange(startRow: number, startCol: number, endRow: number, endCol: number) {
        if (this.editor)
            this.editor.selection.setRange(new this.ace.Range(startRow, startCol, endRow, endCol));
    }

    setValue(value: string) {
        if (this.editor) {
            this.editor.setValue(value);
            this.setLine(0);
        }
        else
            this.initialValue = value;
    }

    useAbsolutePositioning(): boolean {
        return true;
    }

}
