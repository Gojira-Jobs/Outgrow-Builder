import { Component, OnInit,Input } from '@angular/core';
import {Helper} from '../helpers/helper';
@Component({
  selector: 'load-frame',
  template: `
    <div class="row" [class.hidden]="!showFrame">
        <div class="col-sm-8 col-xs-8"></div>
        <div class="col-sm-2 col-xs-2"><button class="btn-lg" (click)="showFrame=false"><i class="fa fa-pencil"></i></button></div>
        <div class="col-sm-2 col-xs-2"></div>
    </div>
    <div class="row" [class.hidden]="showFrame">
      <div class="col-sm-2 col-xs-2"></div>
      <div class="col-sm-6 col-xs-6"><input pattern="^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$" type="text" #urlValue class="form-control" style="width:100%;height:100%"></div>
      <div class="col-sm-2 col-xs-2"><button class="btn btn-default btn-lg" (click)="showFrame=true" [disabled]="!urlValue.valid">See it</button></div>
      <div class="col-sm-2 col-xs-2"></div>
    </div>
    <div [class.hidden]="!showFrame" class="row">
      <div class="col-sm-2 col-xs-2"></div>
      <div class="col-sm-8 col-xs-8">
        <iframe [src]="urlValue.value | urlSafe" width="100%" height="600px">
              <p>Your browser does not support iframes.</p>
        </iframe> 
      </div>
      <div class="col-sm-2 col-xs-2"></div>
         
    </div>
  `,
  styles: []
})
export class LoadFrameComponent extends Helper implements OnInit {
@Input() data:any;
showFrame:Boolean=false;
  constructor() { super();}

  ngOnInit() {
  }

}
