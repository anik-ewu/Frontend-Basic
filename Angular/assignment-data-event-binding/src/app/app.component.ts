import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'assignment-data-event-binding';

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  intervalFired(value: number) {
    if(value%2 == 0) {
      this.evenNumbers.push(value);
    }
    else{
      this.oddNumbers.push(value);
    }
    console.log(this.evenNumbers.length);
  }


}
