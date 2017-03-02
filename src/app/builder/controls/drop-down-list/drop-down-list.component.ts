
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'drop-down-list',
  template: `
  <div class="row">
      <div class="col-md-1 col-xs-1">&nbsp;</div>
      <div class="dropdown" class="col-md-10 col-xs-10">
          <select class="form-control">
              <option *ngFor="let option of data.options"
                    [value]="" #opt >{{option.label }}</option>
          </select>
      </div>
      <div class="col-md-1 col-xs-1">&nbsp;</div>
  </div>

  `,
    styles: []
})
export class DropDownList implements OnInit {
@Input() data:any;

    constructor() {
    }

    ngOnInit() {
    }

}
