import {Component, OnInit, Input, OnChanges, ViewEncapsulation} from "@angular/core";
import {Helper} from "../helpers/helper";
declare var jQuery: any;
@Component({
    selector: 'og-header',
    template: `
    
      <p  class="main-head" [froalaEditor]="options"
                    [(froalaModel)]="data.name" (froalaModelChange)="emitChanges($event)">
      </p>
     
  `,
    encapsulation: ViewEncapsulation.None
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
