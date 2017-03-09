import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ControlComponent} from "./control.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {FroalaEditorModule, FroalaViewModule} from "angular2-froala-wysiwyg";
import {CONTROLS} from "./controls";
import {LeadformComponent} from "./leadform/leadform.component";
import {MenuComponent} from "./menu/menu.component";
import { LoadFrameComponent } from './load-frame/load-frame.component';
import {UrlSafePipe} from './pipes/url-safe.pipe';
@NgModule({
    imports: [
        CommonModule,
        FroalaEditorModule,
        FroalaViewModule,
        ReactiveFormsModule, FormsModule
    ],
    declarations: [ControlComponent, CONTROLS,
        LeadformComponent,
        MenuComponent,
        LoadFrameComponent,UrlSafePipe],
    exports: [ControlComponent]
})
export class ControlsModule {
}
