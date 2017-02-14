import {Component, OnInit} from "@angular/core";
import {DefaultJSON} from './services/DefaultJSON.service';
import {App} from './models/App';
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
    constructor(private service:DefaultJSON) {
    }
app:App;
    ngOnInit() {
    }
    createPage(type:string){
        this.app=this.service.getJson('');
        console.log(this.app.pages[0].bgImage);
    }
}
