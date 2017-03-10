import {BrowserModule} from "@angular/platform-browser";
import {NgModule, ModuleWithProviders} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {BuilderModule} from "./builder/builder.module";

const rootRoute: ModuleWithProviders = RouterModule.forRoot([{
    path: '',
    component: HomeComponent
}]);

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BuilderModule,
        rootRoute
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
