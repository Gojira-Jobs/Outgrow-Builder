import {Component, OnInit, Input, OnChanges} from "@angular/core";
import {Helper} from "../helpers/helper";
@Component({
    selector: 'sub-header',
    template: `
    
      <h2 class="sub-head" [froalaEditor]="options"
                    [(froalaModel)]="data.name" (froalaModelChange)="emitChanges($event)">
      </h2>
  `,
    styles: [`
    .sub-head {font-family: montserratregular;font-size: 24px;color: #e5e5e6;word-wrap: break-word;}
  `]
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
