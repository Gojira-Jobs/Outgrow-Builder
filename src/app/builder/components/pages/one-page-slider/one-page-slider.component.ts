import {Component, OnInit, Input, OnChanges} from "@angular/core";
import {App} from "../../../models/App";


@Component({
    selector: 'one-page-slider',
    templateUrl: './one-page-slider.component.html',
})
export class OnePageSliderComponent implements OnInit,OnChanges {
    @Input()
    jsonTemplate: App;

    constructor() {

    }

    ngOnInit() {
    }

    ngOnChanges(changes) {
        if (this.jsonTemplate != undefined) {

            console.log('hello', this.jsonTemplate);
            //  this.jsonTemplate = this.jsonTemplate.jsonTemplate;

        }

    }
}
