import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OddComponent,
    EvenComponent
  ]
})
export class GameControlModule { }
