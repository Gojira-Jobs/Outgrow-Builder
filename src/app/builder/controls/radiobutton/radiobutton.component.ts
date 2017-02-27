import {Component, OnInit,Input} from '@angular/core';
import {Helper} from '../helpers/helper';
@Component({
    selector: 'radiobutton',
    template: `<div>
            <div class="question-subhead" [froalaEditor]="options" [(froalaModel)]="data.name"></div>
            <div class="question-section">
                <div  *ngFor="let radiobtn of data.options;let i=index" class="radio-btn">
                    <input type="radio"  name="grp" ><label [(froalaModel)]="data.options[i].label" [froalaEditor]="options" ></label>
                </div>
            </div>
        </div>
    `
})
export class RadiobuttonComponent extends Helper implements OnInit {
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
