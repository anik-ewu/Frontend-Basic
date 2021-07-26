import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
// import { EventEmitter } from 'stream';

/*

**ngIF
  <h2 *ngIf="true">This is true</h2>
  <h2 *ngIf="displayName; else elseBlock">
      Sabbir Hasan
  </h2>
  
  <ng-template #elseBlock>  
    <h2>Name is Hidden</h2>
  </ng-template>

  <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
    
    <ng-template #thenBlock>
      <h2>Sabbir</h2>
    </ng-template>
    
    <ng-template #elseBlock>
      <h2>Hidden</h2>
    </ng-template>

*ngSwitch Directives
  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You Picked red</div>
    <div *ngSwitchCase="'blue'">You Picked blue</div>
    <div *ngSwitchCase="'green'">You Picked green</div>
    <div *ngSwitchDefault>You Pick Again</div>
  </div>

***ngFOr Directives [here we render html]
  first/last/odd/even/index as i 
  <div *ngFor="let color of colors; index as i">
    <h2 >{{i}} : {{color}}</h2>
  </div>


*/

@Component({
  selector: 'app-test',
  template: `
  <h2>{{name}} </h2>
  <h2>{{name | lowercase}} </h2>
  <h2>{{name | uppercase}} </h2>
  <h2>{{name | slice:3}} </h2>
  <h2>{{name | slice:3:5}} </h2>
  <h2>{{person | json}} </h2>
  <h2>{{message | titlecase}} </h2>
  
  
 

  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name="Sabbir Hasan Anik";
  public message ="You're the best";
  public person={
    "firstName": "Sabbir",
    "lastNamex": "Hasan"
  }
  constructor() { }

  ngOnInit(): void {
  } 

}
