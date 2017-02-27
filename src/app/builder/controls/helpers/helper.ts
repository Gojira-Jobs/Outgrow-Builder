import {Output, EventEmitter} from "@angular/core";
export class Helper {

    @Output() controlOutput: EventEmitter<any> = new EventEmitter();

    emitChanges(event: any) {
        this.controlOutput.emit(event);
    }

    public options: any = {
        placeholderText: 'Edit Your Content Here!',
        toolbarInline: true,
        charCounterCount: false,
        events: {},
        toolbarButtons: ['bold', 'italic', 'underline', 'color', 'html',
            'clearFormatting', 'paragraphFormat'],
    };
}