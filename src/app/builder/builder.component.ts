import {Component, OnInit} from "@angular/core";
import {DefaultJSON} from "./services/DefaultJSON.service";
import {App} from "./models/App";
import {SavePage} from "./services/savePage.service";
import {Subscription} from "rxjs";

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

    constructor(private serviceDefaultJSON: DefaultJSON, private savePageService: SavePage) {
    }

    ngOnInit() {
        console.log('creating');
        this.jsonTemplate = new App();

        if (this.savePageService.getFromLocalStore()) {
            console.log('loading previous state from local store');
            this.jsonTemplate = JSON.parse(this.savePageService.getFromLocalStore());
        }

        this.pageChangeSubscription = this.savePageService.getPageChangeObservable().debounceTime(1000)
            .distinctUntilChanged((x: string, y: string) => (x == y),
                (x) => (JSON.stringify(x))).subscribe(data => {
                console.log('saving data');
                this.savePageService.saveToLocalStore(JSON.stringify(data));
            });
    }

    createPage(type: string) {

        //check if app exists in local storage
        if (this.savePageService.getFromLocalStore()) {
            console.log('init second time');
            this.jsonTemplate = JSON.parse(this.savePageService.getFromLocalStore());
            this.jsonTemplate.pages = this.jsonTemplate.pages
                .concat(this.serviceDefaultJSON.getJson("Landing").pages);
        } else {
            console.log('init first time');
            this.initializeViewContent();
        }
        this.savePageService.notifyPageChanges(this.jsonTemplate);
    }


    private initializeViewContent() {
        this.jsonTemplate = this.serviceDefaultJSON.getJson("Landing");

        this.jsonTemplate.templateType = "Landing";
        console.log(this.jsonTemplate);
    }


}
