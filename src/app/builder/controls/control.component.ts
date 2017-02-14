import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'control',
  template: `
    <logo *ngIf="data.type=='logo'" [data]="data"></logo>
    <og-header *ngIf="data.type=='header'" [data]="data"></og-header>
  `,
  styles: []
})
export class ControlComponent implements OnInit {
@Input() page:any;
@Input() data:any;
  constructor() { }

  ngOnInit() {
  }

}
