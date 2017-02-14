import { Component, OnInit,Input} from '@angular/core';
import {FroalaOptions} from '../froala-options';

@Component({
  selector: 'sub-header',
  template: `
    <div class="sub-head" [froalaEditor]="options"
                    [(froalaModel)]="data.name">
    </div> 
  `,
  styles: []
})
export class SubHeader extends FroalaOptions implements OnInit {
@Input() data:any;
constructor() { super(); }

  ngOnInit() {
  }

}
