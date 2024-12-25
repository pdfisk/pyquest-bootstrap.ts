import { PqApi } from "../../../api";
import { AbstractElement } from "../../core";
import { TextPanel } from "../../widgets/panels/TextPanel";
import { Page } from "../Page";

export class StatusPage extends Page {
    textPanel?: TextPanel;

    constructor() {
        super();
    }

    defaultContent(): AbstractElement {
        this.textPanel = new TextPanel;
        return this.textPanel;
    }

    defaultTitle(): string {
        return 'Status';
    }

    handlesOnReady(): boolean {
        return true;
    }

    onReady() {
        super.onReady();
        this.showVersionAndTimestamp();
    }

    showVersionAndTimestamp() {
        const version = PqApi.version();
        const timestamp = PqApi.timestamp();
        this.textPanel?.prn(`  Version: ${version}`);
        this.textPanel?.prn(`Timestamp: ${timestamp}`);
    }

}
