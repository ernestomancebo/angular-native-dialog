import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogTriggerComponent } from './components/dialog-trigger/dialog-trigger.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogTriggerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
