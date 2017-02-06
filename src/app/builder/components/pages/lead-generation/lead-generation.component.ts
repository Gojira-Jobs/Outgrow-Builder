import {Component, OnInit} from "@angular/core";
import {Script} from "../../../services/script.service";
import {EditableDirective} from "../../../editable.directive";
import {ToolbarComponent } from '../../../toolbar.component';
declare var jQuery: any
declare var filepicker: any;

@Component({
    selector: 'lead-generation',
    templateUrl: './lead-generation.component.html',
    styleUrls: ['./assets/style.css']
})
export class LeadGenerationComponent implements OnInit{

    mainHeading: string;
    subHeading: string;
    nameInputBox: string;
    emailInputBox: string;
    nameInputBox1:string;
    button: string;
    element: Object;
    filePickerKey: any = "A4VUUCqJTBKGi5JXFxPZ3z";

    constructor(script: Script) {
        script.load('filepicker').then(data => {
            console.log('script loaded ', data);
        }).catch(error => console.log(error));
    }
   
    private initializeViewContent() {
        this.mainHeading = "Calculate the risk of you getting a heart disease.";
        this.subHeading = "Heart problems are at an all time high. See if your lifestyle makes you susceptible.";
        this.nameInputBox = "John Doe";
        this.emailInputBox = "John@outgrow.co";
        this.nameInputBox1=this.nameInputBox;
        console.log(this.nameInputBox);
        this.button = "Estimate Costs";
    }

    ngOnInit() {
        this.initializeViewContent();
    }

    
   

    uploadImage(control: any) {
        filepicker.setKey(this.filePickerKey);
        filepicker.pick(
            {
                mimetypes: ['image/*'],
                imageQuality: 50
            },
            (InkBlob: any) => {
                control.src = InkBlob.url;
                jQuery('#filepicker_dialog_container').find('a').click();
            }, (FPError: any) => {
                console.log(FPError.toString());
            });
    }
}