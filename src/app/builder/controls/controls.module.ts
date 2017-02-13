import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControlComponent} from './control.component';
import {CONTROLS} from './controls';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ControlComponent,CONTROLS, RadiobuttonComponent]
})
export class ControlsModule { }
