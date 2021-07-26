import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { TestAnotherComponent } from './test-another/test-another.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestAnotherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
