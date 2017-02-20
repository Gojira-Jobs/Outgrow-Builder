import {Component, OnInit, Input, ViewEncapsulation, trigger, state, style, animate, transition} from '@angular/core';
import {Helper} from "../helpers/helper";

@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    animations: [
        trigger('visibilityChanged', [
            state('true', style({opacity: 1})),
            state('false', style({opacity: 0})),
            state('true', style({transform: 'translateX(0)'})),
            state('false', style({transform: 'translateX(100%)'})),
            transition('* => *', [
                style({transform: 'translateX(-100%)'}),
                animate(100)
            ]),
        ])
    ],

    encapsulation: ViewEncapsulation.None
})
export class MenuComponent extends Helper implements OnInit {

    @Input()
    data: any;

    @Input()
    isVisible: boolean

    constructor() {
        super();
    }

    ngOnInit() {
        console.log('success');
    }

}
