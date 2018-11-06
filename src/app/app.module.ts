import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GnxUiModule} from 'projects/gnx-ui/src/lib/gnx-ui.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        GnxUiModule
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
