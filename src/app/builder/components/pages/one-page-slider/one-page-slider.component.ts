import {Component, OnInit, Input} from "@angular/core";
import {SavePage} from "../../../services/savePage.service";
import {App} from "../../../models/App";
import {Helper} from "../../../controls/helpers/helper";
@Component({
    selector: 'one-page-slider',
    templateUrl: './one-page-slider.component.html',
    styles: [`.landing-page {width: 100vw;display: table-cell;vertical-align: middle;height: 72vh;text-align:center;}
          .pageSetter{margin-bottom:5px}
          `]
})
export class OnePageSliderComponent extends Helper implements OnInit {
    
    types=[{label:'Single Select',value:'radio_button'},
            {label:'Text input',value:'text_input'},
            {label:'Multi Select',value:'checkbox'},
            {label:'Drop Down',value:'dropdown'},
            {label:'Numeric Slider',value:'numeric-slider'}];
    
    @Input()
    jsonTemplate: App;

    constructor(private savePageService: SavePage) {
        super();
    }

    ngOnInit() {
    }

    notifyChanges(event) {
        console.log('changes made');
        this.savePageService.notifyPageChanges(this.jsonTemplate);
    }

}
