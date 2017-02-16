import {Component, OnInit, Input, OnChanges,Output,EventEmitter} from "@angular/core";
import {FroalaOptions} from "../froala-options";
import {Helper} from '../helpers/helper';
@Component({
    selector: 'og-header',
    template: `
    <div class="row main-head">
      <div class="col-xs-2 col-sm-2">&nbsp;</div>
      <h1 class=" col-sm-8 col-xs-8"  style="margin-top:0" [froalaEditor]="options"
                    [(froalaModel)]="data.name" (froalaModelChange)="emitChanges($event)">
      </h1>
      <div class="col-xs-2 col-sm-2">&nbsp;</div>
    </div>
  `,
    styles: [`
    .main-head{
      color:aqua;
    }
  `]
})
export class Header extends Helper implements OnInit,OnChanges {
 
   @Input() data:any;
    ngOnChanges() { }
    
    constructor() { super(); }
    ngOnInit() {
    }

}
