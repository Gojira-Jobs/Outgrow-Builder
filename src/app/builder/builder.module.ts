import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LeadGenerationComponent} from "./components/pages/lead-generation/lead-generation.component";
import {QuestionComponent} from "./components/pages/question/question.component";
import {WelcomeComponent} from "./components/pages/welcome/welcome.component";
import {RouterModule} from "@angular/router";
import {BuilderComponent} from "./builder.component";
import {Script} from "./services/script.service";

const builderRouter: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'builder',
        component: BuilderComponent
    }
]);

@NgModule({
    imports: [
        CommonModule, builderRouter
    ],
    declarations: [LeadGenerationComponent, QuestionComponent, WelcomeComponent, BuilderComponent],
    providers: [Script]
})
export class BuilderModule {
}
