import {Component, OnInit} from "@angular/core";
import {Script} from "../../../services/script.service";
import {EditableDirective} from "../../../editable.directive";
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
        this.button = "Estimate Costs";
    }

    ngOnInit() {
        this.initializeViewContent();
    }

    
    format(event, type) {
      
        console.log(type);
        var tag;
        if (type == 'bold') tag = 'b';
        if (type == 'italic') tag = 'i';
        if (type == 'underline') tag = 'u';
        var appended = document.createElement(tag);
        appended.textContent = window.getSelection().toString();
        console.log(window.getSelection().toString());
        var range = window.getSelection().getRangeAt(0);
        range.deleteContents();
        range.insertNode(appended);
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
