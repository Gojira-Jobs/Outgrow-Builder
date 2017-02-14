import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'logo',
  template: `
    <header class="landing-page-header">
        <div class="logo">
          <a href="javascript:void(0);">
            <img src="{{data.name}}" alt="abc..">
          </a>
        </div>
   </header>
  `,
  styles: []
})
export class Logo implements OnInit {
@Input() data:any='';


  constructor() { }

  ngOnInit() {
  }

}
