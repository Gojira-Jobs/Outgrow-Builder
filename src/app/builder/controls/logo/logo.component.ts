import {Component, OnInit, Input,ViewEncapsulation,ElementRef,ViewChild} from "@angular/core";
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
                     <div id="logo" >
                       <a id='eg-init-on-link' href="{{data.config.attr.redirectUrl}}">             
                        <img id="edit" 
                            [froalaEditor]="options"
                            [ngStyle]="{'height':data.config.attr.height,
                            'width':data.config.attr.width}" 
                            #imgElement src="{{data.imageURL}}" alt="{{data.props.alt}}">
                     <!--   <i class="fa fa-camera" aria-hidden="true"></i>-->
                    </a>
                    </div>

                </div>
            </div>
        </div>
        
    </header>
  `,
   encapsulation:ViewEncapsulation.None
})
export class Logo extends Helper implements OnInit {
    @Input() data: any = '';
@ViewChild('imgElement') imageEle:ElementRef;
    filePickerKey: any = "A4VUUCqJTBKGi5JXFxPZ3z";

    constructor(private ele:ElementRef) {
        super();
    }

    ngOnInit() {
        let self=this;
        jQuery.FroalaEditor.DefineIcon('replaceImage', {NAME: 'cloud-upload'});
        jQuery.FroalaEditor.RegisterCommand('replaceImage', {
        title: 'Replace Image',
        focus: false,
        undo: true,
        refreshAfterCallback: true,
        callback: function () {
            self.uploadImage(self.imageEle.nativeElement);
            this.events.focus();
        
            }
        });
       
        this.options={
            imageResize:true,
            imageEditButtons:[ 'replaceImage','imageRemove', 'imageLink', 'linkOpen', 'linkEdit', 'imageAlt', 'imageSize'],
           theme: 'dark',
           black:'#000',
            events:{
                'froalaEditor.contentChanged' : function(e, editor) {
                    
                    self.data.config.attr.height=e.target.style.height;
                    self.data.config.attr.width=e.target.style.width;
                    self.data.props.alt=e.target.alt;
                    console.log(jQuery(e.target).parent('a:first').length);
                    if(jQuery(e.target).parent('a:first').length>0){
                        let obj=jQuery(e.target).parent('a:first').attr('href');
                        self.data.config.attr.redirectUrl=obj;
                    }
                    else{}
                     self.emitChanges(e);
                }
            },
            
        }
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
                this.emitChanges('done');
                jQuery('#filepicker_dialog_container').find('a').click();
            }, (FPError: any) => {
                console.log(FPError.toString());
            });
    }
    setChanges(){
        return false;
    }
}
