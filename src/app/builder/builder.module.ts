import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadGenerationComponent } from './components/pages/lead-generation/lead-generation.component';
import { QuestionComponent } from './components/pages/question/question.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LeadGenerationComponent, QuestionComponent, WelcomeComponent]
})
export class BuilderModule { }
