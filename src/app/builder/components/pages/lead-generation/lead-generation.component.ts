import {Component, OnInit} from "@angular/core";
import {Script} from "../../../services/script.service";

declare var jQuery: any
declare var filepicker: any;

@Component({
    selector: 'lead-generation',
    templateUrl: './lead-generation.component.html',
    styles: [`
.highlight_menu_animate {
  transition: top 75ms ease-out,left 75ms ease-out;
}
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

    checkforSelection(event) {
        this.element = event.target;
        var menu = jQuery("#toolbar-options");
        if (window.getSelection() && window.getSelection().toString().length > 0) {
            console.log(document.getElementById("toolbar-options"))
            var menu = jQuery("#toolbar-options");
            var s = document.getSelection();
            var r = s.getRangeAt(0);
            console.log(menu);
            if (r && s.toString()) {
                var p = r.getBoundingClientRect();
                if (p.left || p.top) {
                    menu.css({
                        display: 'block',
                        position: 'absolute',
                        left: (p.left + (p.width / 2)) - (menu.width() / 2),
                        top: (p.top - menu.height() - 10),
                        opacity: 0
                    })
                        .animate({
                            opacity: 1
                        }, 300);

                    setTimeout(function () {
                        console.log("dkdk");
                        menu.addClass('highlight_menu_animate');
                    }, 10);
                    return;
                }


            }
        }
        else {
            menu.animate({opacity: 0}, function () {
                menu.hide().removeClass('highlight_menu_animate');
            });
        }
    }

    format(event, type) {
        var tag;
        if (type == 'bold') tag = 'b';
        if (type == 'italic') tag = 'i';
        if (type == 'underline') tag = 'u';
        var appended = document.createElement(tag);
        appended.textContent = window.getSelection().toString();
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
