import { Component, OnInit,Input,ViewChild } from '@angular/core';
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
      <div class="col-sm-6 col-xs-6"><input  type="text" #urlValue class="form-control" style="width:100%;height:100%"></div>
      <div class="col-sm-2 col-xs-2"><button class="btn btn-default btn-lg" (click)="linkSet()" >See it</button></div>
      <div class="col-sm-2 col-xs-2"></div>
    </div>
    <div [class.hidden]="!showFrame" class="row">
      <div class="col-sm-2 col-xs-2"></div>
      <div class="col-sm-8 col-xs-8">
        <iframe onload="window.parent.scrollTo(0,0)" allowtransparency="true" [src]="data.url | urlSafe"  style="width:100%; height:{{pageHeight}}px; border:none;" scrolling="no">
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
@Input() page: any;
@ViewChild('urlValue') urlEmbed; 
showFrame:Boolean=false;
pageHeight: number=1200;
  constructor() { super();}

  ngOnInit() {
    if(this.data.url){
      this.showFrame=true;
    }
    if(this.page.sections[0].title=='MediaVideos'){
      this.pageHeight=600;
    }
  }

  linkSet(){
    this.showFrame=true;
    this.data.url=this.urlEmbed.nativeElement.value;
    this.emitChanges("Embed link successfully set");
  }

}
