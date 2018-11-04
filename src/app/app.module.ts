import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GnxUiModule } from 'projects/gnx-ui/src/lib/gnx-ui.module';

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
export class AppModule { }
