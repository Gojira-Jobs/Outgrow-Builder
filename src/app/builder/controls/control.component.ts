import {Component, OnInit, Input} from "@angular/core";
import {Helper} from "./helpers/helper";
@Component({
    selector: 'control',
    template: `
    <logo *ngIf="data.type=='logo'" [data]="data" (controlOutput)="emitChanges($event)"></logo>
    <og-header  *ngIf="data.type=='header'" [data]="data" (controlOutput)="emitChanges($event)"></og-header>
    <sub-header *ngIf="data.type=='sub-header'" [data]="data" (controlOutput)="emitChanges($event)"></sub-header>
     <leadform *ngIf="data.type=='leadform'" [data]="data" [page]="page"  ></leadform>
         
  `,
    styles: []
})
export class ControlComponent extends Helper implements OnInit {

    @Input() page: any;
    @Input() data: any;

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
