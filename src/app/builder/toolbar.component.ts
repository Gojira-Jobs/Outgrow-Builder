import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./assets/style.css']
})
export class ToolbarComponent implements OnInit {
@Output('updatedDom') update:EventEmitter<any>=new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
   format(event, type) {
      
        console.log(type);
        var tag;
        if (type == 'bold') tag = 'b';
        if (type == 'italic') tag = 'i';
        if (type == 'underline') tag = 'u';
        if(type=='h1') tag='h1';
        if(type=='h2') tag='h2';
        var appended = document.createElement(tag);
        var sel=window.getSelection();
        appended.textContent = window.getSelection().toString();
        console.log(window.getSelection().toString());
        var range = window.getSelection().getRangeAt(0);
        range.deleteContents();
        range.insertNode(appended);
        var element=window.getSelection().getRangeAt(0).commonAncestorContainer.parentNode;
        console.log(element);
        this.update.emit(element);
      //  console.log(window.getSelection().getRangeAt(0));
        // var range2=document.createRange();
        // range2.setStart(window.getSelection().getRangeAt(0).commonAncestorContainer.parentNode.childNodes[0],window.getSelection().getRangeAt(0).startOffset-1);
        // range2.collapse(true);
        // sel.removeAllRanges();
        // sel.addRange(range2);
      // window.getSelection().getRangeAt(0).commonAncestorContainer.parentNode.focus()
      
    } 
}
