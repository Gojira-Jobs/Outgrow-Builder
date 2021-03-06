import {Script} from "../../../services/script.service";
import {SavePage, sectionLeadGeneration} from "../../../services/savePage.service";
import {Component, OnInit, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";
import {Page} from "../../../models/PageModel";
declare var jQuery: any
declare var filepicker: any;

@Component({
    selector: 'lead-generation',
    templateUrl: './lead-generation.component.html',
    styleUrls: ['./assets/style.css']
})
export class LeadGenerationComponent implements OnInit,OnDestroy {

    public options: Object = {
        placeholderText: 'Edit Your Content Here!',
        toolbarInline: true,
        charCounterCount: false,
        toolbarButtons: ['bold', 'italic', 'underline', 'color', 'html', 'clearFormatting'],
    };
    pageChangeSubscription: Subscription;
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
            console.log('init first time');
        }

        /*   this.savePageService.notifyPageChanges(this.page);
         this.pageChangeSubscription = this.savePageService.getPageChangeObservable().debounceTime(1000)
         .distinctUntilChanged((x: string, y: string) => (x == y),
         (x: Page) => (JSON.stringify(x.control))).subscribe(data => {
         console.log('saving data');
         this.savePageService.saveToLocalStore(JSON.stringify(data));
         });
         */
    }

    ngOnDestroy(): void {
        if (this.pageChangeSubscription)
            this.pageChangeSubscription.unsubscribe();
    }

    updateModel(controlType: string, innerHTML) {
        /*    console.log(controlType, innerHTML);
         this.page.control[controlType] = innerHTML;
         this.savePageService.notifyPageChanges(this.page);
         */
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
