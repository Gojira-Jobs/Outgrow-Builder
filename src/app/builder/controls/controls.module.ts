import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControlComponent} from './control.component';
import {FroalaEditorModule, FroalaViewModule} from 'angular2-froala-wysiwyg';
import {CONTROLS} from './controls';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
@NgModule({
  imports: [
    CommonModule,
        FroalaEditorModule,
        FroalaViewModule,
  ],
  declarations: [ControlComponent,CONTROLS, RadiobuttonComponent],
  exports:[ControlComponent]
})
export class ControlsModule { }
