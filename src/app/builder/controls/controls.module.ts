import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControlComponent} from './control.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FroalaEditorModule, FroalaViewModule} from 'angular2-froala-wysiwyg';
import {CONTROLS} from './controls';
import { LeadformComponent } from './leadform/leadform.component';
import { MenuComponent } from './menu/menu.component';
@NgModule({
  imports: [
    CommonModule,
        FroalaEditorModule,
        FroalaViewModule,
        ReactiveFormsModule
  ],
  declarations: [ControlComponent,CONTROLS,
   LeadformComponent,
   MenuComponent],
  exports:[ControlComponent]
})
export class ControlsModule { }
