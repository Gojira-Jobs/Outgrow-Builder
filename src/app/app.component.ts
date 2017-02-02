import {Component,ElementRef,OnInit,AfterViewInit} from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit,AfterViewInit{
  constructor(private ele:ElementRef){}
  ngOnInit():any{}
  ngAfterViewInit(){}
abc(){
  alert("skskd");
}


}
