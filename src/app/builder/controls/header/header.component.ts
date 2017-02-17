import {Component, OnInit, Input, OnChanges} from "@angular/core";
import {Helper} from "../helpers/helper";
@Component({
    selector: 'og-header',
    template: `
    
      <h1 class="main-head"  style="margin-top:0" [froalaEditor]="options"
                    [(froalaModel)]="data.name" (froalaModelChange)="emitChanges($event)">
      </h1>
     
  `,
    styles: [`.main-head {font-family: montserratregular;font-size: 48px;color: #00e3d8;word-wrap: break-word;}
  `]
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
