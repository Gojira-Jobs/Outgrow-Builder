import {Component, OnInit, Input,OnChanges,EventEmitter,Output} from "@angular/core";
import  {Helper} from './helpers/helper';
@Component({
    selector: 'control',
    template: `
    <logo *ngIf="data.type=='logo'" [data]="data" (Updater)="emitChanges($event)"></logo>
    <og-header  *ngIf="data.type=='header'" [data]="data" (Updater)="emitChanges($event)"></og-header>
    <sub-header *ngIf="data.type=='sub-header'" [data]="data" (Updater)="emitChanges($event)"></sub-header>
     <leadform *ngIf="data.type=='leadform'" [data]="data" [page]="page"  ></leadform>
         
  `,
    styles: []
})
export class ControlComponent extends Helper implements OnInit,OnChanges{
    @Input() page: any;
    @Input() data: any;
    ngOnChanges(){}

    constructor() {
        super();
    }

    ngOnInit() {
    }
    
}
