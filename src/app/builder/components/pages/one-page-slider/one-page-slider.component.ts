import {Component, OnInit, Input,OnChanges} from "@angular/core";
import {Page} from "../../../models/PageModel";
@Component({
    selector: 'one-page-slider',
    templateUrl: './one-page-slider.component.html',
})
export class OnePageSliderComponent  implements OnInit,OnChanges {
ngOnChanges(){
    console.log(this.pages);
}
    @Input()
    pages: Page;

    constructor() {

      //  super();
    }

    ngOnInit() {
    }
    setChanges(event){
        console.log(typeof event);
        console.log(this.pages);
        //console.log(this.pages[event.p_id].sections[event.sec_id].items[event.item_id]);
    }

}
