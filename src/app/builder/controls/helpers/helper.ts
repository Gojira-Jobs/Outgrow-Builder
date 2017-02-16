import {Output,EventEmitter} from  '@angular/core';
export class Helper {
    @Output() Updater:EventEmitter<any>=new EventEmitter();
    emitChanges(event:any){
        this.Updater.emit(event);
    }
     public options: Object = {
        placeholderText: 'Edit Your Content Here!',
        toolbarInline: true,
        charCounterCount: false,
        toolbarButtons: ['bold', 'italic', 'underline', 'color', 'html', 'clearFormatting','paragraphFormat'],
    };
}