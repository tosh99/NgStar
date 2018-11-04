import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GnxUiModule} from 'projects/gnx-ui/src/lib/gnx-ui.module';

// import {DropdownComponent} from "projects/gnx-ui/src/lib/dropdown/dropdown.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        GnxUiModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
