import { Component, OnInit } from '@angular/core';
/* 
*** interpolation
Welcome {{name}} // {{greet()}}//{{2+2}}//{{name.toUpperCase()}}

*** property binding
<input [disbled]="isDisabled" id="{{myId}}" type="text" value="Sabbir">

*** class binding

<input class="textSpecial" [class]="successClass">
<input [class.text-danger]="hasError">
<input [ng.classes]="messageClasses">

*** style binding
templete=`
    <h2 [style.color]="hasError?'red':'green'">Hellow</h2>
    <h2 [ngStyle]="textStyle">Hellow</h2>

`
*** event biniding
    <button (click)="onClick()">Button 1</button>
    <button (click)="greeting='welcome sabbir'">Greet</button>
    {{greeting}}


** templete referance
   <input #myInput type="text">
   <button (click)="logMessage(myInput.value:number)"></button>
   ERROR: parameter value has an 

** Two way binding
   <input [(ngModel)]="name" type="text">
   {{name}}

**Structural Directives
  

export class TestComponent{

  public name="sabbir";
  public isSpecial=true;
  public hasError=false;

  messageCLasses{
    text-special:isSpecial;
    text-danger: !hasError;
  }
}

*/
@Component({
  selector: 'app-test',
  template: `
            <h2 class="text-success">Welcome {{name}}</h2>
            <h2 [style.color]="textColor">Welcome {{name}}</h2>
            
            <button [disabled]="endCounting"(click)="onClick()" >Disable After 5 clicks : Click {{cnt}}</button>
            <br><br><br>

            <input [(ngModel)]="name" type="text">
            {{name}}

            
            `,
  styles: [`

    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }

  `]
})
export class TestComponent implements OnInit {

  public name = "";
  public textColor='blue';
  public endCounting=false;
  public cnt=0;



  public onClick(){
    this.cnt++;
    if(this.cnt>=5)
      this.endCounting=true;
  }
  constructor() { }

  ngOnInit(): void {
  }

  

}
