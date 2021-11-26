import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { BodyPartComponent } from './body-part/body-part.component';
import { BodyModuleModule } from './body-part/body-module.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    BodyPartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BodyModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
