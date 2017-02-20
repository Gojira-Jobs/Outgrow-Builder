import {Component, OnInit} from "@angular/core";
declare var jQuery: any;
@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): any {
    }


}
