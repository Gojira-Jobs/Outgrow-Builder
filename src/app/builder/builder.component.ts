import {Component, OnInit} from "@angular/core";
import {DefaultJSON} from "./services/DefaultJSON.service";
import {App} from "./models/App";
import {SavePage} from "./services/savePage.service";
import {Subscription} from "rxjs";
import {Script} from "./services/script.service";

@Component({
    selector: 'app-builder',
    templateUrl: './builder.component.html',
    styles: [`
    .main-section{
        color: white;
        padding:70px;
    }
    .linkCard{
        border: 2px solid white;
        padding:20px 10px;
        border-radius: 6px
    }
    `]
})
export class BuilderComponent implements OnInit {

    jsonTemplate: App;
    pageChangeSubscription: Subscription;

    constructor(private serviceDefaultJSON: DefaultJSON, private savePageService: SavePage,
                private script: Script) {
    }

    ngOnInit() {
        console.log('creating');
        //load filepicker script
        this.script.load('filepicker','rangeSlider').then(data => {
            console.log('script loaded ', data);
        }).catch(error => console.log('jkj',error));

        this.jsonTemplate = new App();

        if (this.savePageService.getFromLocalStore()) {
            console.log('loading previous state from local store');
            this.jsonTemplate = JSON.parse(this.savePageService.getFromLocalStore());
            this.savePageService.notifyPageChanges(this.jsonTemplate);
        }

        this.pageChangeSubscription = this.savePageService.getPageChangeObservable().debounceTime(1000)
            .distinctUntilChanged((x: string, y: string) => (x == y),
                (x) => (JSON.stringify(x))).subscribe(data => {
                console.log('saving data');
                this.savePageService.saveToLocalStore(JSON.stringify(data));
            });
    }

    createPage(type: string) {
        if (this.savePageService.getFromLocalStore()) {
            console.log('init second time');
            this.jsonTemplate = JSON.parse(this.savePageService.getFromLocalStore());
            this.jsonTemplate.pages = this.jsonTemplate.pages
                .concat(this.serviceDefaultJSON.getJson(type).pages);
                console.log(this.jsonTemplate);
        } else {
            console.log('init first time');
            this.initializeViewContent(type);
        }
        this.savePageService.notifyPageChanges(this.jsonTemplate);
    }
    private initializeViewContent(type) {
        this.jsonTemplate = this.serviceDefaultJSON.getJson(type);

        this.jsonTemplate.templateType =type;
        console.log(this.jsonTemplate);
    }


}
