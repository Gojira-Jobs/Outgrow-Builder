import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControlComponent} from './control.component';
import {CONTROLS} from './controls';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ControlComponent,CONTROLS]
})
export class ControlsModule { }
