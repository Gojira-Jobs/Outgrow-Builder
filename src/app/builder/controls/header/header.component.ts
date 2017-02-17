import {Component, OnInit, Input, OnChanges,ViewEncapsulation} from "@angular/core";
import {Helper} from "../helpers/helper";
@Component({
    selector: 'og-header',
    template: `
    
      <h1 class="main-head"  style="margin-top:0" [froalaEditor]="options"
                    [(froalaModel)]="data.name" (froalaModelChange)="emitChanges($event)">
      </h1>
     
  `,
    encapsulation:ViewEncapsulation.None
})
export class Header extends Helper implements OnInit,OnChanges {

    @Input() data: any;

    ngOnChanges() {
    }

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
