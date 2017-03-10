import {Component, OnInit, ElementRef, Renderer, Input} from "@angular/core";
import {DefaultJSON} from "./services/DefaultJSON.service";
import {App} from "./models/App";
import {SavePage} from "./services/savePage.service";
import {Subscription} from "rxjs";
import {Script} from "./services/script.service";
import {Emitter} from "./services/emitter.service";

@Component({
    selector: 'app-builder',
    templateUrl: './builder.component.html',
    styles: [`
    .main-section{
        color: white;
        padding:70px;
    }
    .linkCard{
        border: 1px solid white;
        padding:20px 10px;
        background-color: gray;
        
    }
    .mouse
    {
        cursor: pointer;
    }
    .shadow
    {
       font-size: 20px;
        box-shadow: 0 0 10px rgba(0,0,0,0.6);
         -moz-box-shadow: 0 0 10px rgba(0,0,0,0.6);
          -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.6); 
        -o-box-shadow: 0 0 10px rgba(0,0,0,0.6);
        background: white; 
        
        border: 1px solid cornflowerblue;
        color: black;
        height: 300px;
        width: 50%;
        left: 50%;
        margin-top: 20px; 
}
.colshadow
{
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
         -moz-box-shadow: 0 0 10px rgba(0,0,0,0.6);
          -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.6); 
        -o-box-shadow: 0 0 10px rgba(0,0,0,0.6);
        background: white; 
        text-align: center;

}
.row1
{
    height: 20%;
    
}
.col
{
   
    height: 100%;
}
    }
    `]
})
export class BuilderComponent implements OnInit {
    calculatorOn=true;
    srcElement="../../assets/images/bg-new.jpg";
    openForm=false;
    showDiv=false;
    graphVisible: boolean = false;
    jsonTemplate: App;
    color=true;
    val:boolean= false;
    hr: boolean =false;
    icon :string= "fa fa-plus-circle";
    pageChangeSubscription: Subscription;

    constructor(private serviceDefaultJSON: DefaultJSON, private savePageService: SavePage,
                private script: Script, private emitterService: Emitter,
                private elementRef: ElementRef, private renderer: Renderer) {
    }

    ngOnInit() {
        //load filepicker script
        this.script.load('filepicker', 'rangeSlider').then(data => {
            console.log('script loaded ');

            this.emitterService.notifyChanges("scriptLoaded");
        }).catch(error => console.log(error));

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

    scrollToNewlyAddedPage() {

        if (this.jsonTemplate.pages.length && this.jsonTemplate.pages.length > 0) {
            let page = this.jsonTemplate.pages[this.jsonTemplate.pages.length - 1];

            setTimeout(() => {
                let element = this.elementRef.nativeElement.querySelector('#' + page._id);
                if (element)
                    element.scrollIntoView(element);
            }, 250);
        }
    }

    createPage(type: string) {

        if (this.savePageService.getFromLocalStore()) {
            this.jsonTemplate = JSON.parse(this.savePageService.getFromLocalStore());
            this.jsonTemplate.pages = this.jsonTemplate.pages
                .concat(this.serviceDefaultJSON.getJson(type).pages);
            console.log(this.jsonTemplate);
        } else {
            this.initializeViewContent(type);
        }
        this.savePageService.notifyPageChanges(this.jsonTemplate);

        this.scrollToNewlyAddedPage();

    }

    private initializeViewContent(type) {
        this.jsonTemplate = this.serviceDefaultJSON.getJson(type);

        this.jsonTemplate.templateType = type;
        console.log(this.jsonTemplate);
    }
    show(){
        if(this.val == false)
        {
           this.val=true;
           this.icon = "fa fa-minus-circle";
        }
        else
        {
           this.val = false;
           this.icon = "fa fa-plus-circle";
        }
    }
    showhr(){
        if(this.hr == false)
           this.hr=true;
        else
           this.hr = false;
    }
}
