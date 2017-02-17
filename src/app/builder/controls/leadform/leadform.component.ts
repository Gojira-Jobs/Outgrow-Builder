import { Component, OnInit,Input,Output,EventEmitter,OnChanges} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Helper} from '../helpers/helper'
@Component({
  selector: 'leadform',
  templateUrl: './leadform.component.html',
  styles:[`
  .input-section{ width:65%; margin:50px auto 0 auto ;}
.input-section input{ float:left; width: 43% !important; margin: 8px !important; border:2px solid #c4c4c6 !important; color:#fefeff; font-family:montserratregular; font-size:14px !important;}
.input-section ::-webkit-input-placeholder {color: #c4c4c6;}
.input-section :-moz-placeholder { /* Firefox 18- */ color: #c4c4c6;  }
.input-section ::-moz-placeholder {  /* Firefox 19+ */color: #c4c4c6; }
.input-section :-ms-input-placeholder {color: #c4c4c6;}

  `]
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
