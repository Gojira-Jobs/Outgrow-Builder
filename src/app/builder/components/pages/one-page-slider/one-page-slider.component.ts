import {Component, OnInit, Input} from "@angular/core";
import {Page} from "../../../models/PageModel";


@Component({
    selector: 'one-page-slider',
    templateUrl: './one-page-slider.component.html',
})
export class OnePageSliderComponent implements OnInit {

    @Input()
    pages: Page;

    constructor() {

    }

    ngOnInit() {
    }
}
