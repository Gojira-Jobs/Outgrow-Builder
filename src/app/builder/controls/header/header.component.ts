import { Component, OnInit,Input } from '@angular/core';
import {FroalaOptions} from '../froala-options';
@Component({
  selector: 'og-header',
  template: `
    <div >
      <h1 id="main-heading" class="main-head" [froalaEditor]="options"
                    [(froalaModel)]="data.name">
      </h1>
    </div>
  `,
  styles: []
})
export class Header extends FroalaOptions implements OnInit {
  @Input() data:any;
  mainheading:any="";
  constructor() { super(); }

  ngOnInit() {
  }

}
