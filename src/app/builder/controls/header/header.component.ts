import {Component, OnInit, Input, OnChanges} from "@angular/core";
import {FroalaOptions} from "../froala-options";
@Component({
    selector: 'og-header',
    template: `
    <div class="row main-head">
      <div class="col-xs-2 col-sm-2">&nbsp;</div>
      <h1 class=" col-sm-8 col-xs-8"  style="margin-top:0" [froalaEditor]="options"
                    [(froalaModel)]="mainheading">
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
export class Header extends FroalaOptions implements OnInit,OnChanges {
    @Input()

    ngOnChanges() {
        if (this.data != undefined) {
            this.mainheading = this.data.name;
        }
    }
  }
  @Input() data:any;
  mainheading:any="";
  constructor() { super(); }

    @Input() data: any;
    mainheading: any = "";

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
