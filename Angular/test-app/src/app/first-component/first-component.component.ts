import { Component, ContentChild, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FirstComponentComponent implements OnInit {

  @ViewChild('userInput', {static: false}) userInputData: any;
  @ContentChild('firstText', {static: true}) firstTextValue: any;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value: any) {
    console.log(this.userInputData.nativeElement.value);
  }
  ngAfterContentInit() {
    console.log(this.firstTextValue.nativeElement.textContent);
  }

}
