import {Component, OnInit, Input} from "@angular/core";
import {Helper} from "./helpers/helper";
@Component({
    selector: 'control',
    template: `
    <logo *ngIf="data.type=='logo'" [data]="data" (controlOutput)="emitChanges($event)"></logo>
    <menu *ngIf="data.type=='menu'" [data]="data" [page]="page" (controlOutput)="emitChanges($event)"></menu>
    <og-header  *ngIf="data.type=='header'" [data]="data" (controlOutput)="emitChanges($event)"></og-header>
    <sub-header *ngIf="data.type=='sub-header'" [data]="data" (controlOutput)="emitChanges($event)"></sub-header>
    <leadform *ngIf="data.type=='leadform'" [data]="data" [page]="page" (controlOutput)="emitChanges($event)"></leadform>
    <click-button *ngIf="data.type=='click-button'" [data]="data" (controlOutput)="emitChanges($event)"></click-button>
     <radiobutton *ngIf="data.type=='radio_button'" [data]="data" (controlOutput)="emitChanges($event)"></radiobutton>
     <text-input  *ngIf="data.type=='text_input'" [data]="data" (controlOutput)="emitChanges($event)"></text-input>
    <checkbox *ngIf="data.type=='checkbox'" [data]="data" (controlOutput)="emitChanges($event)"></checkbox>
     <drop-down-list *ngIf="data.type=='dropdown'" [data]="data" (controlOutput)="emitChanges($event)"></drop-down-list>
     <nm-slider *ngIf="data.type=='numeric-slider'" [data]="data" (controlOutput)="emitChanges($event)"></nm-slider>
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
        console.log(this.data);
    }

}
