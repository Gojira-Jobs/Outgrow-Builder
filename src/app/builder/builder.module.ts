import {NgModule, ModuleWithProviders} from "@angular/core";
import {MaterialModule} from '@angular/material';
import {FroalaEditorModule, FroalaViewModule} from 'angular2-froala-wysiwyg';
import {CommonModule} from "@angular/common";
import {LeadGenerationComponent} from "./components/pages/lead-generation/lead-generation.component";
import {QuestionComponent} from "./components/pages/question/question.component";
import {WelcomeComponent} from "./components/pages/welcome/welcome.component";
import {RouterModule} from "@angular/router";
import {BuilderComponent} from "./builder.component";
import {Script} from "./services/script.service";
import {SavePage} from "./services/savePage.service";
import {Emitter} from './services/emitter.service';
import {OnePageSliderComponent} from './components/pages/one-page-slider/one-page-slider.component';
import {DefaultJSON} from './services/DefaultJSON.service';
import {ControlsModule} from './controls/controls.module';
import {ResultComponent} from './components/pages/result/result.component';
import {ChartsModule} from "ng2-charts";
//import {ScrollTo} from 'ng2-scroll-to';
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
        FroalaViewModule,
        MaterialModule,
        ChartsModule
    ],
    declarations: [LeadGenerationComponent,
        QuestionComponent, WelcomeComponent,
        BuilderComponent,
        OnePageSliderComponent,
        ResultComponent],
    providers: [Script,
        DefaultJSON, SavePage, Emitter]
})
export class BuilderModule {

}
