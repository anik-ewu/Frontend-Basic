import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerGoalsComponent } from './career-goals/career-goals.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CareerGoalsComponent,
    HobbiesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CareerGoalsComponent,
    HobbiesComponent
  ]
})
export class BodyModuleModule { }
