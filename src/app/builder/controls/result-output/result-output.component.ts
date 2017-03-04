import {Component, OnInit, Input} from "@angular/core";
import {Helper} from "../helpers/helper";

@Component({
    selector: 'result-output',
    templateUrl: './result-output.component.html'
})
export class ResultOutput extends Helper implements OnInit {

    @Input() data: any;

    constructor() {
        super();
    }

    ngOnInit() {
        console.log('check', this.data);
    }

}
