import {NgModule, ModuleWithProviders} from "@angular/core";

import {FroalaEditorModule, FroalaViewModule} from 'angular2-froala-wysiwyg';
import {CommonModule} from "@angular/common";
import {LeadGenerationComponent} from "./components/pages/lead-generation/lead-generation.component";
import {QuestionComponent} from "./components/pages/question/question.component";
import {WelcomeComponent} from "./components/pages/welcome/welcome.component";
import {RouterModule} from "@angular/router";
import {BuilderComponent} from "./builder.component";
import {Script} from "./services/script.service";
import {SavePage} from "./services/savePage.service";
import { SaveState } from './services/save-state.service';
//import {FroalaEditorModule, FroalaViewModule} from 'angular2-froala-wysiwyg';
import { OnePageSliderComponent } from './components/pages/one-page-slider/one-page-slider.component';
import {DefaultJSON} from './services/DefaultJSON.service';
import {ControlsModule} from './controls/controls.module';
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
        ControlsModule, FroalaEditorModule,
        FroalaViewModule
    ],
    declarations: [LeadGenerationComponent,
        QuestionComponent, WelcomeComponent,
        BuilderComponent,
        OnePageSliderComponent],
    providers: [Script,SaveState,
    DefaultJSON, SavePage]
})
export class BuilderModule {

}
