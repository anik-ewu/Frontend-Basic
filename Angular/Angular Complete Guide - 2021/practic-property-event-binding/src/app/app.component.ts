import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [{person: 'test', value:'demo'}];

  addedByAlice(newData: {personName: string, newValue: string}){
    this.data.push({
      person: newData.personName,
      value: newData.newValue
    });
  }


}
