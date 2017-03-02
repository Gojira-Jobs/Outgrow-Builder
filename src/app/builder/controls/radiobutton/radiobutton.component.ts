import {Component, OnInit, Input} from "@angular/core";
import {Helper} from "../helpers/helper";
@Component({
    selector: 'radiobutton',
    template: `<div>
              <div class="question-section">
               
                 <div class="row" *ngFor="let radiobtn of data.options;let i=index">
                    <div class="col-md-1"><input type="radio"  name="grp" ></div>
                    <div class="col-md-11"><span style="cursor:text" [(froalaModel)]="data.options[i].label" [froalaEditor]="options" ></span></div>
                 </div>
            </div>

        </div>
    `
})
export class Radiobutton extends Helper implements OnInit {
    @Input() data:any;

    constructor() {
        super();
    }

    ngOnInit() {
        let self=this;
        this.options.events={
             'froalaEditor.contentChanged' : function(e, editor){
                 console.log('changed');
                 self.emitChanges('done');
             }
        }
    }

}
