import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControlComponent} from './control.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FroalaEditorModule, FroalaViewModule} from 'angular2-froala-wysiwyg';
import {CONTROLS} from './controls';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { LeadformComponent } from './leadform/leadform.component';
@NgModule({
  imports: [
    CommonModule,
        FroalaEditorModule,
        FroalaViewModule,
        ReactiveFormsModule
  ],
  declarations: [ControlComponent,CONTROLS, RadiobuttonComponent, LeadformComponent],
  exports:[ControlComponent]
})
export class ControlsModule { }
