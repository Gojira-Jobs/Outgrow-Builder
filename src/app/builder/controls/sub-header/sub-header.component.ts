import {Component, OnInit, Input, ViewEncapsulation} from "@angular/core";
import {Helper} from "../helpers/helper";
@Component({
    selector: 'sub-header',
    template: `
    
      <p [class]="data.defaultClass" [froalaEditor]="options"
                    [(froalaModel)]="data.name" (froalaModelChange)="emitChanges($event)">
      </p>
  `,
    encapsulation: ViewEncapsulation.None
})
export class SubHeader extends Helper implements OnInit {

    @Input() data: any;
    subHeading: any;

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
