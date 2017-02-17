import { Component, OnInit,Input,Output,EventEmitter,OnChanges,ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Helper} from '../helpers/helper'
@Component({
  selector: 'leadform',
  templateUrl: './leadform.component.html',
   encapsulation:ViewEncapsulation.None
})
export class LeadformComponent extends Helper implements OnInit,OnChanges {

@Input() data;
@Input() page;
leadform:FormGroup;

ngOnChanges(){
  
}
  constructor(private formBuilder:FormBuilder) {
    super();
  }

  ngOnInit() {
    if(this.data!=undefined){
        console.log(this.data);
        let obj:any={};
        this.data.fields.forEach((item)=>{
            let validations=new Array();
            validations.push(Validators.required);
            if(item.name=='Email') validations.push(Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/));
            obj[item.name]=new FormControl('',
            Validators.compose(validations));
        })
        this.leadform=new FormGroup(obj);
        console.log(this.leadform.value);
        
    }
  }
  setChanges(index:number,newValue:string){
    this.data.fields[index].placeholder=newValue;
    this.leadform.valueChanges.debounceTime(200).subscribe((value)=>{
          //if(this.leadform.valid){
            this.emitChanges('done');
         // }
    })
  }

}
