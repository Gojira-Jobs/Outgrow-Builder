
import { Component, OnInit,Input,AfterViewInit,OnChanges, trigger, state, style, animate, transition} from '@angular/core';
import {Helper} from '../helpers/helper'; 
declare var jQuery:any;
@Component({
  selector: 'nm-slider',
  template: `
    <div class="dropdown" style="position:absolute;left:20px;top:20px;">
                            <button class="btn bmd-btn-icon dropdown-toggle" type="button" id="ex1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="material-icons">more_vert</i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-left" aria-labelledby="ex1">
                                <div *ngFor="let obj of specifier">
                                   
                                    <input #inputValue [placeholder]="obj.placeholder" style="margin:5px;width:90%;height:20px"
                                     (blur)="updateSlider(obj.key,obj.dataValue,inputValue)">
                                </div>
                            </div>
    </div>
    <div style="position:relative">
      <input type="text" id="{{data._id}}" name="example_name" value="" />
     <!-- <div style="float:left" *ngFor="let obj of specifier">
        <div (click)="obj.visible=!obj.visible;" style="margin-top:20px">
          <img src="../../assets/images/Settings.svg" style="width: 40px;height: 40px"> 
        </div>
        <input #inputValue style="" [placeholder]="obj.placeholder"
         [@visibilityChanged]="obj.visible" (blur)="updateSlider(obj.key,obj.dataValue,inputValue.value)">
      </div> --> 
    </div> 
    <br/>
    <div style="clear:both"></div>
   
 `,
 animations: [
        trigger('visibilityChanged', [
            state('false', style({transform: 'translateX(10%)', opacity: '0'})),
            state('true', style({transform: 'translateX(-10%)', opacity: '1'})),
            transition('* => *', [
                animate('50ms ease-out')
            ])
        ])
    ],
    styles: []
})
export class NmSlider extends Helper implements OnInit,AfterViewInit{
  specifier:Array<Object>=[];
  @Input() isVisible: boolean = false;
  @Input() data:any;
  ngOnInit() {
    this.specifier=[
      {key:"from",dataValue:"defaultValue",placeholder:"Default Value",visible:false},
      {key:"min",dataValue:"minVal",placeholder:"Min Value",visible:false},
      {key:"max",dataValue:"maxVal",placeholder:"Max Value",visible:false},
      {key:"step",dataValue:"steps",placeholder:"Steps",visible:false},
    ]
  }
ngAfterViewInit(){
  let self=this;
    let id=this.data._id;
      setTimeout(function() {
        
        jQuery("#"+id).ionRangeSlider({
                hide_min_max: false,keyboard: false,min:self.data.props.minVal,
                max: self.data.props.maxVal,from: self.data.props.defaultValue,
                type: 'single',step: self.data.props.steps,prefix: "$",
                grid:true,
                onFinish: function (data) {
                              this.startValue=data.from;
                              console.log("onFinish",data);
                          },
                onUpdate: function (data) {
                              console.log("onUpdate",data);
                          }

          });
      },100);


  
}
constructor() { super(); }

  updateSlider(key:string,dataUpdater:string,currentTag){
    let id=this.data._id;
    let a=jQuery("#"+id).data('ionRangeSlider');
    console.log(key);
    var data={};
    data[key]=currentTag.value;
    a.update(data);
    this.data.props[dataUpdater]=currentTag.value;
    console.log(dataUpdater);
    console.log(this.data.props[dataUpdater]);
    console.log(this.data)
   //this.data.props[dataUpdater]=newValue;
    this.emitChanges("done");
    currentTag.value='';
  }
    

}
