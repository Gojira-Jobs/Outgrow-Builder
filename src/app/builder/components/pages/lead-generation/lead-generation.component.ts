import {Component, OnInit, ElementRef, OnChanges, SimpleChanges, DoCheck, AfterViewChecked} from "@angular/core";
import {Script} from "../../../services/script.service";
import {SavePage, sectionLeadGeneration} from "../../../services/savePage.service";
import {Page, MAIN_HEADING, SUB_HEADING, INPUT_NAME, INPUT_EMAIL, SUBMIT_BUTTON} from "../../../models/PageModel";

declare var jQuery: any;
declare var filepicker: any;

@Component({
    selector: 'lead-generation',
    templateUrl: './lead-generation.component.html',
    styleUrls: ['./assets/style.css']
})
export class LeadGenerationComponent implements OnInit {

    imgElement: Object;
    page: Page = new Page();
    filePickerKey: any = "A4VUUCqJTBKGi5JXFxPZ3z";

    constructor(script: Script, private savePageService: SavePage) {
        script.load('filepicker').then(data => {
            console.log('script loaded ', data);
        }).catch(error => console.log(error));
    }

    ngOnInit() {
        //check if local storage exists
        if (this.savePageService.getFromLocalStore()) {
            console.log('init second time');
            this.page = JSON.parse(this.savePageService.getFromLocalStore());
        } else {
            this.initializeViewContent();
            console.log('init first time');
        }

        this.savePageService.notifyPageChanges(this.page);
        this.savePageService.getPageChangeObservable().debounceTime(1000)
            .subscribe(data => {
                console.log('saving in local storage', JSON.stringify(data));
                this.savePageService.saveToLocalStore(JSON.stringify(data));
            });
    }

    private initializeViewContent() {
        this.page.pagetype = sectionLeadGeneration;
        this.page.control[MAIN_HEADING] = "Calculate the risk of you getting a heart disease.";
        this.page.control[SUB_HEADING] = "Heart problems are at an all time high. See if your lifestyle makes you susceptible.";
        this.page.control[INPUT_NAME] = "John Doe";
        this.page.control[INPUT_EMAIL] = "John@outgrow.co";
        this.page.control[SUBMIT_BUTTON] = "Estimate Costs";
    }

    setMainHeading(event) {
        this.page.control[MAIN_HEADING] = event.target.textContent;
        this.savePageService.notifyPageChanges(this.page);
    }

    setSubHeading(event) {
        this.page.control[SUB_HEADING] = event.target.textContent;
        this.savePageService.notifyPageChanges(this.page);
    }

    setInputEmail(event) {
        this.page.control[INPUT_EMAIL] = event.target.value;
        this.savePageService.notifyPageChanges(this.page);
    }

    setInputName(event) {
        this.page.control[INPUT_NAME] = event.target.value;
        this.savePageService.notifyPageChanges(this.page);
    }

    setSubmitButton(event) {
        this.page.control[SUBMIT_BUTTON] = event.target.textContent;
        this.savePageService.notifyPageChanges(this.page);
    }

    checkforSelection(event) {
        var menu = jQuery('#highlight_menu');
        this.show();
        /* if (window.getSelection() && window.getSelection().toString().length > 0) {


         }
         else {
         menu.animate({opacity: 0}, function () {
         menu.hide().removeClass('highlight_menu_animate');
         });
         }*/
    }

    show() {
        var menu = jQuery('#highlight_menu');
        var s = document.getSelection(),
            r = s.getRangeAt(0);
        if (r && s.toString()) {
            var p = r.getBoundingClientRect();
            if (p.left || p.top) {
                menu.css({
                    left: (p.left + (p.width / 2)) - (menu.width() / 2),
                    top: (p.top - menu.height() - 10),
                    display: 'block',
                    opacity: 0
                })
                    .animate({
                        opacity: 1
                    }, 300);

                setTimeout(function () {
                    menu.addClass('highlight_menu_animate');
                }, 10);
                return;
            }
        }
        menu.animate({opacity: 0}, function () {
            menu.hide().removeClass('highlight_menu_animate');
        });
    }

    format(event, type) {
        var tag;
        if (type == 'bold') tag = 'b';
        if (type == 'italic') tag = 'i';
        if (type == 'underline') tag = 'u';
        var appended = document.createElement(tag);
        appended.textContent = window.getSelection().toString();
        var range = window.getSelection().getRangeAt(0);
        range.deleteContents();
        range.insertNode(appended);
    }

    uploadImage(control: any) {
        filepicker.setKey(this.filePickerKey);
        filepicker.pick(
            {
                mimetypes: ['image/*'],
                imageQuality: 50
            },
            (InkBlob: any) => {
                control.src = InkBlob.url;
                jQuery('#filepicker_dialog_container').find('a').click();
            }, (FPError: any) => {
                console.log(FPError.toString());
            });
    }
}
