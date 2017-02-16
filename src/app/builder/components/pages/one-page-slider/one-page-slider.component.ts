import {Component, OnInit, Input, OnChanges} from "@angular/core";
import {SavePage} from "../../../services/savePage.service";
import {App} from "../../../models/App";
@Component({
    selector: 'one-page-slider',
    templateUrl: './one-page-slider.component.html',
})
export class OnePageSliderComponent implements OnInit,OnChanges {
    ngOnChanges() {
        //     console.log(this.jsonTemplate);
    }

    @Input()
    jsonTemplate: App;

    constructor(private savePageService: SavePage) {
        //  super();

    }

    ngOnInit() {
    }

    notifyChanges(event) {
        console.log('changes made');
        this.savePageService.notifyPageChanges(this.jsonTemplate);
    }

}
