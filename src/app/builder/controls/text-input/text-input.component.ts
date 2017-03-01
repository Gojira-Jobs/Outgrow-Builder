import { Component, OnInit,Input } from '@angular/core';
import {Helper} from '../helpers/helper';
@Component({
  selector: 'text-input',
  template: `
    <input #text type="text"
               (click)="updateCaretAndPlaceholder(text)"
               (keyup)="updateContent(text) "
               (blur)="text.value=''"
               [placeholder]="data?.config.placeholder">
  `,
  styles: []
})
export class TextInput extends Helper implements OnInit {
@Input() data:any;
  constructor() { super(); }
updateContent(control) {
    if(this.data!=undefined){
        this.data.config.placeholder = control.value;
        this.emitChanges(control);
    }
        
    }

    updateCaretAndPlaceholder(text) {
        
        let pos = this.getCaretPos(text);
        (this.data!=undefined)?text.value = this.data.config.placeholder:console.log("hiig");
        console.log(pos);
        this.setSelectionRange(text, pos, pos);
    }

    getCaretPos(input): any {
        let caretPos;
        if (input.selectionStart || input.selectionStart == '0') {
            caretPos = input.selectionStart;
        }
        return caretPos;
    }

    setSelectionRange(input, selectionStart, selectionEnd) {
        if (input.setSelectionRange) {
            input.focus();
            input.setSelectionRange(selectionStart, selectionEnd);
        } else if (input.createTextRange) {
            var range = input.createTextRange();
            range.collapse(true);
            range.moveEnd('character', selectionEnd);
            range.moveStart('character', selectionStart);
            range.select();
        }
    }  
    ngOnInit() {}

}
