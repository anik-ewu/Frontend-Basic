import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AliceComponent } from './alice/alice.component';
import { BobComponent } from './bob/bob.component';
import { DispComponent } from './disp/disp.component';

@NgModule({
  declarations: [
    AppComponent,
    AliceComponent,
    BobComponent,
    DispComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
