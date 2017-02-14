import {Component, OnInit} from "@angular/core";
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
export class BuilderComponent implements OnInit {

    variable: boolean = true;
    jsonTemplate: App;

    constructor(private service: DefaultJSON) {
    }

    ngOnInit() {
        this.jsonTemplate = new App();
    }

    createPage(type: string) {
        this.jsonTemplate.pages = this.jsonTemplate.pages.concat(this.service.getJson(type).pages);
        this.jsonTemplate.templateType = "Landing";
        console.log(this.jsonTemplate);
    }
}
