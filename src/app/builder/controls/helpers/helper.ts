import {Output, EventEmitter} from "@angular/core";
export class Helper {

    @Output() controlOutput: EventEmitter<any> = new EventEmitter();

    emitChanges(event: any) {
        this.controlOutput.emit(event);
    }

    public options: Object = {
        placeholderText: 'Edit Your Content Here!',
        toolbarInline: true,
        charCounterCount: false,
        toolbarButtons: ['bold', 'italic','paragraphStyle', 'underline', 'color', 'html', 'clearFormatting', 'paragraphFormat'],
    };
}