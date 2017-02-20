import {Component, OnInit, Input, OnChanges,ViewEncapsulation} from "@angular/core";
import {Helper} from "../helpers/helper";
@Component({
    selector: 'sub-header',
    template: `
    
      <h2 class="sub-head" [froalaEditor]="options"
                    [(froalaModel)]="data.name" (froalaModelChange)="emitChanges($event)">
      </h2>
  `,
    encapsulation:ViewEncapsulation.None

})
export class SubHeader extends Helper implements OnInit,OnChanges {
    ngOnChanges() {
        if (this.data != undefined) {
            this.subHeading = this.data.name;
            //console.log(this.data.name);

        }
    }

    @Input() data: any;
    subHeading: any;

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
