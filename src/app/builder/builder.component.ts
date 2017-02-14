import {Component, OnInit, OnChanges, SimpleChanges} from "@angular/core";
import {DefaultJSON} from "./services/DefaultJSON.service";
import {App} from "./models/App";


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
export class BuilderComponent implements OnInit,OnChanges {

    variable: boolean = true;
    jsonTemplate: App;
    pages = new Array();

    constructor(private service: DefaultJSON) {
    }

    ngOnInit() {
        this.jsonTemplate = new App();
    }

    createPage(type: string) {
        this.pages.push(this.service.getJson(type).pages);
        this.jsonTemplate = new App();
        this.jsonTemplate.templateType = type;
        this.jsonTemplate.pages = this.pages;
        console.log(this.jsonTemplate);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(this.jsonTemplate);
    }
}
