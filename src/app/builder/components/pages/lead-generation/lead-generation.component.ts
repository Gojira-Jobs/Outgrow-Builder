import {Component, OnInit} from "@angular/core";
import {Script} from "../../../services/script.service";

declare var jQuery: any
declare var filepicker: any;

@Component({
    selector: 'lead-generation',
    templateUrl: './lead-generation.component.html',
    styles: [`
        #replaceid{
		    background-color:rgba(0,0,0,0.4);
            display:none;padding:15px;
	        text-align:center;
		    }
        #replace-area{
	        postion:relative;
	        padding:0;
            }
	    #replace-area:hover #replaceid{
		    display:inline;
		    position:absolute;
		    top:10px;
		    left:10px;
		    width:183px;
		    height:56px;
            vertical-align:middle;
		    color:red;		
		    cursor: pointer
	}`]
})
export class LeadGenerationComponent implements OnInit {

    mainHeading: string;
    subHeading: string;
    nameInputBox: string;
    emailInputBox: string;
    button: string;
    filePickerKey: any = "A4VUUCqJTBKGi5JXFxPZ3z";

    constructor(script: Script) {
        script.load('filepicker').then(data => {
            console.log('script loaded ', data);
        }).catch(error => console.log(error));
    }

    ngOnInit() {
        this.initializeViewContent();
    }

    private initializeViewContent() {
        this.mainHeading = "Calculate the risk of you getting a heart disease.";
        this.subHeading = "Heart problems are at an all time high. See if your lifestyle makes you susceptible.";
        this.nameInputBox = "John Doe";
        this.emailInputBox = "John@outgrow.co";
        this.button = "Estimate Costs";
    }

    checkforSelection(event) {
        if (window.getSelection().toString()) {

            console.log("jdjd" + window.getSelection().getRangeAt(0).startOffset + window.getSelection);
            console.log(jQuery(event.target).text().slice(window.getSelection().getRangeAt(0).startOffset,
                window.getSelection().getRangeAt(0).endOffset));
            var startIndex = window.getSelection().getRangeAt(0).startOffset;
            var endIndex = window.getSelection().getRangeAt(0).endOffset;
            var slicedText = jQuery(event.target).text().slice(startIndex, endIndex);
            var text = window.getSelection().toString();
            jQuery(event.target).html(jQuery(event.target).text().replace(slicedText, '<span id='
                + window.getSelection() + '>' + slicedText + '</span>'));

            console.log(text);
            jQuery("#" + text).toolbar({
                content: '#toolbar-options',
                event: 'select'
            });
        }
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
            },
            (FPError: any) => {
                console.log(FPError.toString());
            }
        );
    }
}


    


