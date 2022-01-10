import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { BodyPartComponent } from './body-part/body-part.component';
import { BodyModuleModule } from './body-part/body-module.module';
import { CustomPropertyBindingComponent } from './custom-property-binding/custom-property-binding.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    BodyPartComponent,
    CustomPropertyBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BodyModuleModule,
    FormsModule
  ],
  exports: [
    CustomPropertyBindingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
