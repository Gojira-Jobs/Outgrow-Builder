import {Component, OnInit} from "@angular/core";
@Component({
    selector: 'question',
    templateUrl: './question.component.html',
})
export class QuestionComponent implements OnInit {
    public options: Object = {
        placeholderText: 'Edit Your Content Here!',
        toolbarInline: true,
        charCounterCount: false,
        toolbarButtons: ['bold', 'italic', 'underline']
    }

    constructor() {

    }

    ngOnInit() {

    }


}
