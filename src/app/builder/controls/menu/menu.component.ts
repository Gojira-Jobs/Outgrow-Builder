import {Component, OnInit, Input, ViewEncapsulation, trigger, state, style, animate, transition} from "@angular/core";
import {Helper} from "../helpers/helper";

@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    animations: [
        trigger('visibilityChanged', [
            state('false', style({transform: 'translateX(10%)', opacity: '0'})),
            state('true', style({transform: 'translateX(-10%)', opacity: '1'})),
            transition('* => *', [
                animate('50ms ease-out')
            ])
        ])
    ],
    encapsulation: ViewEncapsulation.None
})
export class MenuComponent extends Helper implements OnInit {

    @Input()
    data: any;
    @Input()
    page: any;
    @Input()
    isVisible: boolean = false;

    constructor() {
        super();
    }

    ngOnInit() {
        console.log('success', this.page);
    }

}
