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
export class OnePageSliderComponent extends Helper implements OnInit,AfterViewInit {

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

    onLoad() {

    }

    ngAfterViewInit(): void {

    }

    ngAfterViewChecked(): void {
        //       if (this.jsonTemplate.pages.length && this.jsonTemplate.pages.length > 0) {
        //         let page = this.jsonTemplate.pages[this.jsonTemplate.pages.length - 1];
        //       let element = this.document.getElementById(page._id);
        //    console.log("navigation to latest addded page", element);
        //element.scrollIntoView(false);

        // }
        //   setTimeout(() => this.scrollToBottom(), 1000);
    }



    notifyChanges(event) {
        console.log('changes made');
        this.savePageService.notifyPageChanges(this.jsonTemplate);
    }

}
