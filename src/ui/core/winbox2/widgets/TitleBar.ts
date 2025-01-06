import { SizeConstants } from "../../../../constants/SizeConstants";
import { DivElement } from "../../elements/DivElement";
import { Window } from "../Window";

export class TitleBar extends DivElement {
    dragStartX: number = 0;
    dragStartY: number = 0;
    isDragging: boolean = false;
    parentWindow: Window;
    windowStartX: number = 0;
    windowStartY: number = 0;

    constructor(parentWindow: Window) {
        super();
        this.parentWindow = parentWindow;
    }

    addEventHandlers() {
        super.addEventHandlers();
        // this.addEventHandler('ondrag', (evt: any) => { this.onDrag(evt); }, true);
        // this.addEventHandler('ondragstart', (evt: any) => { this.onDragStart(evt); }, true);
        // this.addEventHandler('ondragend', (evt: any) => { this.onDragEnd(evt); }, true);
        this.addEventListener('mousedown', (evt: any) => { this.onMouseDown(evt); }, true);
        document.addEventListener('mousemove', (evt: any) => { this.onMouseMove(evt); }, true);
        document.addEventListener('mouseup', (evt: any) => { this.onMouseUp(evt); }, true);
    }

    defaultAbsolutePositioning(): boolean {
        return true;
    }

    defaultBottom(): number {
        return -SizeConstants.windowTitlebarHeight;
    }

    defaultBackgroundColor(): string {
        return 'white';
    }

    handlesOnReady(): boolean {
        return true;
    }

    onDrag(evt: any) {
        const clientX = evt.clientX;
        const clientY = evt.clientY;
        const windowX = this.windowStartX + clientX;
        const windowY = this.windowStartY + clientY;
        this.parentWindow.setLeft(windowX);
        this.parentWindow.setTop(windowY);
        console.log('onDrag', windowX, windowY);
    }

    onDragStart(evt: any) {
        this.dragStartX = evt.clientX;
        this.dragStartY = evt.clientY;
        this.windowStartX = this.parentWindow.clientLeft();
        this.windowStartY = this.parentWindow.clientTop();
        console.log('onDragStart', this.dragStartX, this.dragStartY);
    }

    onDragEnd(evt: any) {
        const clientX = evt.clientX;
        const clientY = evt.clientY;
        const windowX = this.windowStartX + clientX;
        const windowY = this.windowStartY + clientY;
        this.parentWindow.setLeft(windowX);
        this.parentWindow.setTop(windowY);
        console.log('onDropEnd', windowX, windowY);
    }

    onMouseDown(evt: MouseEvent) {
        this.isDragging = true;
        this.dragStartX = evt.clientX;
        this.dragStartY = evt.clientY;
        this.windowStartX = this.parentWindow.clientLeft();
        this.windowStartY = this.parentWindow.clientTop();
        evt.preventDefault();
        evt.stopPropagation();
        // console.log('onMouseDown', evt);
        // (window as any).X = evt;
    }

    onMouseMove(evt: MouseEvent) {
        if (!this.isDragging)
            return;
        evt.preventDefault();
        evt.stopPropagation();
        const deltaX = evt.clientX - this.dragStartX;
        const deltaY = evt.clientY - this.dragStartY;
        const newX = this.windowStartX + deltaX;
        const newY = this.windowStartY + deltaY;
        this.parentWindow.setLeft(newX);
        this.parentWindow.setTop(newY);
        // console.log('onMouseMove', evt);
    }

    onMouseUp(evt: MouseEvent) {
        evt.preventDefault();
        evt.stopPropagation();
        this.isDragging = false;
        this.windowStartX = this.parentWindow.clientLeft();
        this.windowStartY = this.parentWindow.clientTop();
        // console.log('onMouseUp', evt);
    }

    onReady() {
        super.onReady();
        // this.setAttribute('draggable', true);
        this.addEventHandlers();
    }

}
