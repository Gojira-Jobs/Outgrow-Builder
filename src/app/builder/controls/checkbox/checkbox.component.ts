import {Component, OnInit, Input} from '@angular/core';
import {Helper} from '../helpers/helper';

@Component({
    selector: 'checkbox',
    template: `
    <div>
    dhhdd
              <div class="question-section">
               
                 <div class="row" *ngFor="let radiobtn of data.options;let i=index">
                    <div class="col-md-1"><input type="checkbox"></div>
                    <div class="col-md-11"><span style="cursor:text" [(froalaModel)]="data.options[i].label" [froalaEditor]="options" ></span></div>
                 </div>
            </div>

      </div>
  `,
    styles: []
})
export class Checkbox extends Helper implements OnInit {
    @Input() data: any;

    constructor() {
        super();
    }

    ngOnInit() {
        let self = this;
        this.options.events = {
            'froalaEditor.contentChanged': function (e, editor) {
                console.log('changed');
                self.emitChanges('done');
            }
        }
    }

}
