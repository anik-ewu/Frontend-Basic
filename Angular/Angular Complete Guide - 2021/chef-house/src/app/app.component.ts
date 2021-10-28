import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  openRecipePage: boolean = true;
  selectPage(flagStatus: boolean){
    this.openRecipePage= flagStatus;
  }
}
