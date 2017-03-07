import {Component, Input, Inject, ViewChild, ElementRef, OnInit, AfterViewInit} from "@angular/core";
import {SavePage} from "../../../services/savePage.service";
import {App} from "../../../models/App";
import {Helper} from "../../../controls/helpers/helper";
import {DOCUMENT} from "@angular/platform-browser";

@Component({
    selector: 'one-page-slider',
    templateUrl: './one-page-slider.component.html',
    styles: [`.landing-page {width: 100vw;display: table-cell;vertical-align: middle;height: 72vh;text-align:center;}
          .pageSetter{margin-bottom:5px}
          `]
})
export class OnePageSliderComponent extends Helper implements OnInit {

    @ViewChild('content')
    private myScrollContainer: ElementRef;

    types = [{label: 'Single Select', value: 'radio_button'},
        {label: 'Text input', value: 'text_input'},
        {label: 'Multi Select', value: 'checkbox'},
        {label: 'Drop Down', value: 'dropdown'},
        {label: 'Numeric Slider', value: 'numeric-slider'}];

    @Input()
    jsonTemplate: App;

    constructor(private savePageService: SavePage, @Inject(DOCUMENT) private document: any) {
        super();
    }

    ngOnInit(): void {

        if (this.jsonTemplate.pages.length && this.jsonTemplate.pages.length > 0) {
            let page = this.jsonTemplate.pages[this.jsonTemplate.pages.length - 1];
            let element = this.document.getElementById(page._id);

            if (element) {
                console.log("navigation to latest addded page", element);
                element.scrollIntoView(element);
            }
            //element.scrollIntoView(false);
        }
    }

   ChangeSelection(pageIndex,secIndex,index,value){
       console.log(pageIndex,secIndex,index,value);
       console.log(this.jsonTemplate.pages[pageIndex].sections[secIndex].items[index]);
       this.jsonTemplate.pages[pageIndex].sections[secIndex].items[index].type=value;
       console.log(this.jsonTemplate);
   }
    notifyChanges(event) {
        console.log('changes made');
        console.log(this.jsonTemplate.pages[0].sections);
        this.savePageService.notifyPageChanges(this.jsonTemplate);
    }
    addQuestion(pageIndex,secIndex,control,index){
        console.log(pageIndex,secIndex,control,index);
        let newObj = Object.create(control);
        this.jsonTemplate.pages[pageIndex].sections[secIndex].items.splice(index+1,0,newObj);
        console.log(this.jsonTemplate.pages[pageIndex].sections[secIndex]);
        this.notifyChanges("data changed");
    }
}
