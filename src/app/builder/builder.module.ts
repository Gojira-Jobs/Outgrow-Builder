import {NgModule, ModuleWithProviders} from "@angular/core";

import {CommonModule} from "@angular/common";
import {LeadGenerationComponent} from "./components/pages/lead-generation/lead-generation.component";
import {QuestionComponent} from "./components/pages/question/question.component";
import {WelcomeComponent} from "./components/pages/welcome/welcome.component";
import {RouterModule} from "@angular/router";
import {BuilderComponent} from "./builder.component";
import {Script} from "./services/script.service";
import { EditableDirective } from './editable.directive';
import { ToolbarComponent } from './toolbar.component';
import {SavePage} from "./services/savePage.service";
import { FroalaEditorModule,FroalaViewModule} from 'angular2-froala-wysiwyg';

import {FroalaEditorDirective,FroalaViewDirective} from 'angular2-froala-wysiwyg';
const builderRouter: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'builder',
        component: BuilderComponent
    }
]);

@NgModule({
    imports: [
        CommonModule, 
        builderRouter,
        FroalaEditorModule,
        FroalaViewModule
    ],
    declarations: [LeadGenerationComponent, 
    QuestionComponent, WelcomeComponent,
     BuilderComponent, EditableDirective, ToolbarComponent],
    providers: [Script, SavePage]
})
export class BuilderModule {
}
