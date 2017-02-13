import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'app-builder',
    templateUrl:'./builder.component.html',
    styles:[`
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
variable:boolean=true;
    constructor() {
    }

    ngOnInit() {
    }
    createPage(type:string){
        console.log(type);
    }
}
