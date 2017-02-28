import {Component, OnInit, Input} from "@angular/core";
import {SavePage} from "../../../services/savePage.service";
import {App} from "../../../models/App";
@Component({
    selector: 'one-page-slider',
    templateUrl: './one-page-slider.component.html',
    styles: [`.landing-page {width: 100vw;display: table-cell;vertical-align: middle;height: 72vh;text-align:center;}
          .pageSetter{margin-bottom:5px}
          `]
})
export class OnePageSliderComponent implements OnInit {

    @Input()
    jsonTemplate: App;

    constructor(private savePageService: SavePage) {
    }

    ngOnInit() {
    }

    notifyChanges(event) {
        console.log('changes made');
        this.savePageService.notifyPageChanges(this.jsonTemplate);
    }

}
