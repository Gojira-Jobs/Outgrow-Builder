import { Component, OnInit,Input,ViewEncapsulation } from '@angular/core';
import {Helper} from '../helpers/helper';
@Component({
  selector: 'click-button',
  template: `

    <button class="btn prime-action"
    [innerHTML]="data.name"
    [froalaEditor]="options"></button>
    
  `,
  encapsulation:ViewEncapsulation.None
})
export class Button extends Helper implements OnInit {
@Input() data;

public options: Object ;
 ngOnInit() {
   
    let self=this;
    this.options= {
  placeholder: "Edit Me",
  events : {
    'froalaEditor.contentChanged' : function(e, editor) {
     self.data.name=e.target.innerHTML;
      console.log(self.data.name);
      self.emitChanges('done');
    }
  }
}
  }
  constructor() { 
    super();
  }

 

}
