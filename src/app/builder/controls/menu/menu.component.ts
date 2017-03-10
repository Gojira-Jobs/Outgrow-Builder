import {Component, OnInit, Input, ViewEncapsulation, trigger, state, style, animate, transition} from "@angular/core";
import {Helper} from "../helpers/helper";
declare var filepicker: any;

@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    animations: [
        trigger('visibilityChanged', [
            state('false', style({transform: 'translateX(10%)', opacity: '0'})),
            state('true', style({transform: 'translateX(-10%)', opacity: '1'})),
            transition('* => *', [
                animate('50ms ease-out')
            ])
        ])
    ],
    encapsulation: ViewEncapsulation.None
})
export class MenuComponent extends Helper implements OnInit {

    @Input()
    data: any;
    @Input()
    page: any;
    @Input()
    isVisible: boolean = false;
    filePickerKey: any = 'Ap8ETk3FYQOlT98dMyXpNz';
    constructor() {
        super();
    }

    ngOnInit() {
        console.log('success', this.page);
    }

    changeWallpaper(){
        console.log("Changing wallpaper");
        filepicker.setKey(this.filePickerKey);
    var options = { 
        mimetypes: ['image/*'],
        container: 'modal',
        services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'GOOGLE_DRIVE', 'DROPBOX', 'CONVERT']
    };
    filepicker.pick(
      options,
      (InkBlob: any) => {
        console.log(InkBlob);
        this.page.bgImage=InkBlob.url;
        this.emitChanges("Changed the wallpaper");
      },
      (FPError: any) => {
        console.log(FPError.toString());
      }
    );
    }

}
