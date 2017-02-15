import {Component, OnInit, Input} from "@angular/core";
import {Script} from "../../services/script.service";
declare var jQuery: any
declare var filepicker: any;
@Component({
    selector: 'logo',
    template: `
  
   <header>
        <div class="col-md-12 col-sm-12 col-xs-12 p10">
            <div class="col-md-6 col-sm-6 col-xs-12 logo">
                <div id="image-outlay">
                    <a id="logo"  (click)="uploadImage(imgElement)">
                                    
                        <img #imgElement src="{{data.name}}" alt="abc..">
                        <i class="fa fa-camera" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    </header>
  `,
    styles: [`
        #logo:hover img{
            background:rgba(0,0,0,.75);
            cursor: pointer;
            -webkit-transition: opacity .25s ease;
        }

        #logo{
            position: relative;
            display: inline-block;
        }

        #logo i{
            display: none;
            color: white;
        }

        #logo:hover i{
            position: absolute;
            top:40%;
            left: 50%;
            display: block;
        }

  `]
})
export class Logo implements OnInit {
    @Input() data: any = '';

    filePickerKey: any = "A4VUUCqJTBKGi5JXFxPZ3z";

    constructor(script: Script) {
        script.load('filepicker').then(data => {
            console.log('script loaded ', data);
        }).catch(error => console.log(error));
    }

    ngOnInit() {
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
