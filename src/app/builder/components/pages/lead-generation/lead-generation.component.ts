import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'lead-generation',
    templateUrl: './lead-generation.component.html',
})
export class LeadGenerationComponent implements OnInit {

    mainHeading: string;
    subHeading: string;
    nameInputBox: string;
    emailInputBox: string;
    button: string;

    constructor() {
    }

    private initializeViewContent() {
        this.mainHeading = "Calculate the risk of you getting a heart disease.";
        this.subHeading = "Heart problems are at an all time high. See if your lifestyle makes you susceptible.";
        this.nameInputBox = "John Doe"
        this.emailInputBox = "John@outgrow.co";
        this.button = "Estimate Costs";
    }

    ngOnInit() {
        this.initializeViewContent();
    }

}
