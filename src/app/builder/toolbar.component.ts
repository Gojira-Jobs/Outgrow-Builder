import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./assets/style.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   format(event, type) {
      
        console.log(type);
        var tag;
        if (type == 'bold') tag = 'b';
        if (type == 'italic') tag = 'i';
        if (type == 'underline') tag = 'u';
        var appended = document.createElement(tag);
        appended.textContent = window.getSelection().toString();
        console.log(window.getSelection().toString());
        var range = window.getSelection().getRangeAt(0);
        range.deleteContents();
        range.insertNode(appended);
    }
}
