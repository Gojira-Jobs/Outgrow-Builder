import { Component, OnInit,Input } from '@angular/core';
import {Helper} from '../helpers/helper';
@Component({
  selector: 'click-button',
  template: `

    <!--<div class="row">
      <div class="col-sm-4 col-xs-4">&nbsp;</div>
      <div class="col-xs-4 col-sm-4">
        <div class="col-xs-2 col-sm-2">&nbsp;</div>
        <div class="col-xs-8 col-sm-8 buttonClass"  [froalaEditor]="options"
              [(froalaModel)]="data.name"
              (froalaModelChange)="emitChanges($event)">
          </div>
        <div class="col-xs-2 col-sm-2">&nbsp;</div>
       </div> 
      <div class="col-sm-4 col-xs-4">&nbsp;</div>
    <div>-->
    <button class="btn prime-action"
    [innerHTML]="data.name"
    [froalaEditor]="options"></button>
    
  `,
  styles: [`
    .buttonClass{
        border:2px solid white;
        padding:10px;
        text-align:center;
    }
    .prime-action {font-family: montserratregular;
      font-size: 18px;color: #fff;
      margin-top: 20px;
       padding: 10px 4%;
       background: #00aea5;
       border-radius: 0 !important;}    

  `]
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
