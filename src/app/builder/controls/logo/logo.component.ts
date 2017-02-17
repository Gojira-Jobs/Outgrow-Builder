import {Component, OnInit, Input,ViewEncapsulation} from "@angular/core";
import {Script} from "../../services/script.service";
import {Helper} from "../helpers/helper";
declare var jQuery: any
declare var filepicker: any;
@Component({
    selector: 'logo',
    template: `
  
   <header>
        <div class="col-md-12 col-sm-12 col-xs-12 p10">
            <div class="col-md-6 col-sm-6 col-xs-12 logo">
                <div id="image-outlay" >
                    <a id="logo"   (click)="uploadImage(imgElement)">
                                    
                        <img style=""  #imgElement src="{{data.imageURL}}" alt="abc..">
                        <i class="fa fa-camera" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    </header>
  `,
   encapsulation:ViewEncapsulation.None
})
export class Logo extends Helper implements OnInit {
    @Input() data: any = '';

    filePickerKey: any = "A4VUUCqJTBKGi5JXFxPZ3z";

    constructor() {
        super();
    }

    ngOnInit() {
    }

    uploadImage(control: any) {
        console.log('hello', control);
        filepicker.setKey(this.filePickerKey);
        filepicker.pick(
            {
                mimetypes: ['image/*'],
                imageQuality: 50
            },
            (InkBlob: any) => {
                control.src = InkBlob.url;
                console.log(InkBlob.url);
                this.data.imageURL = InkBlob.url;
                jQuery('#filepicker_dialog_container').find('a').click();
                console.log('hello world');
                this.emitChanges(control);
            }, (FPError: any) => {
                console.log(FPError.toString());
            });
    }
}
