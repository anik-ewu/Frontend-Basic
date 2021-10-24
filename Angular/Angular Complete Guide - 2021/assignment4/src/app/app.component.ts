import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment4';

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(data: number){
    // console.log(data)
    if(data%2 === 0)
      this.evenNumbers.push(data);
    else
      this.oddNumbers.push(data);
  }

}
