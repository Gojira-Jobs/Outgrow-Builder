import { Component, OnInit,Input,Output,EventEmitter,OnChanges} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'leadform',
  templateUrl: './leadform.component.html',
})
export class LeadformComponent implements OnInit,OnChanges {

@Input() data;
@Input() page;
leadform:FormGroup;

ngOnChanges(){
  
}
  constructor(private formBuilder:FormBuilder) {
    //this.leadform=new FormGroup();
  }

  ngOnInit() {
    if(this.data!=undefined){
        console.log(this.data);
        let obj:any={};
        this.data.fields.forEach((item)=>{
            //let control:FormControl=new FormControl('',Validators.required);
            let validations=new Array();
            validations.push(Validators.required);
            if(item.name=='Email') validations.push(Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/));
            obj[item.name]=new FormControl('',
            Validators.compose(validations));

           // this.leadform.addControl(item.name,control);
        })
        this.leadform=new FormGroup(obj);
        console.log(this.leadform.value);
        this.leadform.valueChanges.subscribe((value)=>{
          console.log(value);
        })
    }
  }

}
