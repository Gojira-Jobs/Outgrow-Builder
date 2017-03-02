
import { Component, OnInit,Input,AfterViewInit,OnChanges, trigger, state, style, animate, transition} from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'nm-slider',
  template: `
    <div style="position:relative">
      <input type="text" id="example_id" name="example_name" value="" />
      <div (click)="isVisible=!isVisible;" style="margin-top:20px">
        <img src="../../assets/images/Settings.svg" style="width: 40px;height: 40px"> 
      </div>
      <input style="margin-left:10px;width:15%;height:15%" placeholder="Min Value" [@visibilityChanged]="isVisible">
    </div>   
   
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
export class NmSlider implements OnInit,AfterViewInit{
  startValue:number=90;
@Input()
    isVisible: boolean = false;
  @Input() data:any;
ngAfterViewInit(){
  let self=this;
  if(this.data!=undefined){
      console.log("gjgj");
      let self=this;
      setTimeout(function() {
        jQuery("#example_id").ionRangeSlider({
                hide_min_max: true,
                keyboard: true,
                min: 0,
                max: self.data.props.maxVal,
                from: self.data.props.minVal,
                //to: 4000,
                type: 'single',
                step: 1,
                prefix: "$",
                grid: true,
                onFinish: function (data) {
                              this.startValue=data.from;
                              console.log(this.startValue)
                              console.log("onFinish",data);
                          },
                onUpdate: function (data) {
                              console.log("onUpdate");
                          }

          });
      },1000);


  }
}
  constructor() { }
  // abc(){
  //   console.log("ddhd");
  //   let a=jQuery("#example_id").data('ionRangeSlider');
  //   a.update({
  //     from:this.startValue
  //   })
   
  // }
    ngOnInit() {}

}
