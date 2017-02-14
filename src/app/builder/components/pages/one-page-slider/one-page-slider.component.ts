import { Component, OnInit,Input,OnChanges } from '@angular/core';
import { Page } from '../../../models/PageModel';
import {App} from '../../../models/App';
@Component({
  selector: 'one-page-slider',
  templateUrl: './one-page-slider.component.html',
})
export class OnePageSliderComponent implements OnInit,OnChanges {
  pages:any;
  @Input() app:any;
  constructor() {
    
   }

  ngOnInit() {
  }
ngOnChanges(changes)
{
//console.log(JSON.parse(this.app));
if(this.app!=undefined){

console.log('hello',this.app);
this.pages=this.app.pages;

}
}

}
