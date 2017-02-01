import {Component,ElementRef,OnInit,AfterViewInit} from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit,AfterViewInit{
  constructor(private ele:ElementRef){}
  ngOnInit():any{
    console.log(jQuery(this.ele.nativeElement));
    jQuery(this.ele.nativeElement).find('#create_section').on('click',function(){

      console.log(jQuery(this.ele));
    // jQuery(this.ele.nativeElement).find("#content-area").append(" <b>Appended text</b>.")
    });

  }
  ngAfterViewInit(){
     console.log(jQuery(this.ele.nativeElement));
    jQuery(this.ele.nativeElement).find('#create_section').on('click',function(){
      alert("ssjsj");
     // console.log(jQuery(this.ele));
    // jQuery(this.ele.nativeElement).find("#content-area").append(" <b>Appended text</b>.")
    // });
    });
}


}
