import { Component, OnInit,Input,OnChanges} from '@angular/core';
import {FroalaOptions} from '../froala-options';

@Component({
  selector: 'sub-header',
  template: `
    <div class="row sub-head">
      <div class="col-xs-2 col-sm-2">&nbsp;</div>
      <h2 class="col-sm-8 col-xs-8"  style="margin-top:0" [froalaEditor]="options"
                    [(froalaModel)]="subHeading">
      </h2>
      <div class="col-xs-2 col-sm-2">&nbsp;</div>
    </div>
  `,
  styles: [`
    .sub-head {
      color:rgba(0,0,0,0.8);
    }
  `]
})
export class SubHeader extends FroalaOptions implements OnInit,OnChanges {
  ngOnChanges(){
    if(this.data != undefined)
    this.subHeading=this.data.name;
  }
@Input() data:any;
subHeading:any;
constructor() { super(); }

  ngOnInit() {
  }

}
