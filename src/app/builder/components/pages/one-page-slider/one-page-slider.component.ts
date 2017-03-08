import {Component, Input, Inject, ViewChild, ElementRef, OnInit} from "@angular/core";
import {SavePage} from "../../../services/savePage.service";
import {App} from "../../../models/App";
import {Helper} from "../../../controls/helpers/helper";
import {DOCUMENT} from "@angular/platform-browser";
import {Item} from "../../../models/Item";


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

        }
    }

    onSelectionChange(pageIndex, secIndex, index, value) {
        console.log(pageIndex, secIndex, index, value);
        console.log(this.jsonTemplate.pages[pageIndex].sections[secIndex].items[index]);
        this.jsonTemplate.pages[pageIndex].sections[secIndex].items[index].type = value;
    }

    notifyChanges(event) {
        console.log('changes made');
        console.log(this.jsonTemplate.pages[0].sections);
        this.savePageService.notifyPageChanges(this.jsonTemplate);
    }

    addQuestion(pageIndex, secIndex, index) {
        let questionItem = new Item('radio_button', 'Do you smoke?');
        questionItem.addFieldToCheckbox([{label: 'Never touched a cigarette', icon: ''},
            {label: 'Once in a while', icon: ''},
            {label: 'A pack a day', icon: ''}]);

        this.jsonTemplate.pages[pageIndex].sections[secIndex].items.splice(index + 1, 0, questionItem);
        this.notifyChanges("data changed");
    }
}
