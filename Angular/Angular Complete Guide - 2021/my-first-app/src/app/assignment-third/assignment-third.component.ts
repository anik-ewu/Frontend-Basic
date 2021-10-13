import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-third',
  templateUrl: './assignment-third.component.html',
  styleUrls: ['./assignment-third.component.css']
})
export class AssignmentThirdComponent implements OnInit {

  showPassword = false;
  buttonClick  = [];
  counter = 0;
  constructor() { }

  ngOnInit(): void {
  }

  displayDetails(){
    this.buttonClick.push(this.counter++);
    return this.showPassword = true;
  }

}
