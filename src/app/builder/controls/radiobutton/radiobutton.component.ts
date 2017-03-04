import {Component, OnInit, Input} from "@angular/core";
import {Helper} from "../helpers/helper";
@Component({
    selector: 'radiobutton',
    template: `<div>
              <div class="question-section">
               
                 <div class="row radio-outer" *ngFor="let radiobtn of data.options;let i=index">
                    <div class="col-md-1"><input type="radio"  name="grp" ></div>
                    <div class="col-md-10"><span style="cursor:text" [(froalaModel)]="data.options[i].label" [froalaEditor]="options" ></span></div>
                    <div class="col-md-1">
                            <div class="dropdown">
                                <button class="btn  bmd-btn-icon dropdown-toggle btn-edits" type="button" id="ex1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    
                                    <i class="fa fa-pencil" aria-hidden="true"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-left" aria-labelledby="ex1">
                                        <button class="dropdown-item" type="button" (click)="edit(i,'new')">New</button>
                                        <button class="dropdown-item" type="button" (click)="edit(i,'delete')">Delete</button>
                                </div>
                            </div>
                    </div>
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
                 
                 self.emitChanges('done');
             }
        }
    }
    edit(index,typeOfOpr){
        console.log("fjfjf",this.data.options[index]);
        if(typeOfOpr=='new')
            this.data.options.splice(index+1, 0, this.data.options[index]);
        if(typeOfOpr=='delete')
           this.data.options.splice(index, 1); 
        this.emitChanges("data change");
    }

}
