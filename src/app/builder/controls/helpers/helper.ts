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
        pluginsEnabled: ['align', 'charCounter', 'codeBeautifier', 'codeView',
            'colors', 'draggable', 'entities', ' file', 'fontFamily', 'fontSize', 'fullscreen', 'image',
            'imageManager', 'inlineStyle', 'lineBreaker', 'link', 'lists', 'paragraphFormat', 'paragraphStyle',
            'quote', 'save', ' table', 'url', 'video', 'wordPaste'],

        toolbarButtons: ['bold', 'italic', 'underline', 'color', 'html',
            'clearFormatting', 'paragraphFormat'],
    };
}