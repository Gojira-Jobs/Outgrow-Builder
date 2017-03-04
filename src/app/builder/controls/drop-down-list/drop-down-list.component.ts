import {Helper} from '../helpers/helper';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'drop-down-list',
  template: `
  <div class="row">
      <div class="col-md-1 col-xs-1">&nbsp;</div>
      <div class="dropdown" class="col-md-10 col-xs-10">
          <select #selection class="form-control" (change)="iseditable=false" [class.hide]="iseditable" >
              <option *ngFor="let option of data.options;let i=index;"
                    [value]="i" #opt >{{i}}{{option?.label }}</option>
          </select>
          <input *ngIf="iseditable" #text type="text" [value]="data?.options[selection?.value].label"
               [placeholder]="data?.config.placeholder" (blur)="update(selection?.value,text.value)">
       

      </div>
      <div class="col-md-1 col-xs-1">
         <div class="dropdown">
                <button class="btn  bmd-btn-icon dropdown-toggle btn-edits" type="button" id="ex1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-left" aria-labelledby="ex1">
                    <button class="dropdown-item" type="button" (click)="edit(selection?.value,'new')">New</button>
                    <button class="dropdown-item" type="button" (click)="edit(selection?.value,'delete')">Delete</button>
                    <button class="dropdown-item" type="button" (click)="edit(selection?.value,'edit')">edit</button>
                </div>
            </div>
    </div>
  </div>

  `,
    styles: []
})
export class DropDownList extends Helper implements OnInit {
@Input() data:any;
iseditable:Boolean=false;
constructor() {
    super();
    }

    ngOnInit() {
    }
    edit(index,typeOfOpr){
        console.log("fjfjf",index,this.data.options[index]);
        if(typeOfOpr=='edit'){
            this.iseditable=true;
            return;
        }
        if(typeOfOpr=='new')
            this.data.options.splice(index+1, 0, this.data.options[index]);
        if(typeOfOpr=='delete')
           this.data.options.splice(index, 1); 
        this.emitChanges("modified");
    }
    update(index,value){
        this.data.options[index].label=value;
        this.iseditable=false;
        this.emitChanges("modified");
    }

}
