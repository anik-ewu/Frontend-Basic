import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-two-way-binding',
  templateUrl: './task-two-way-binding.component.html',
  styleUrls: ['./task-two-way-binding.component.css']
})
export class TaskTwoWayBindingComponent implements OnInit {
  userName = '';
  emptyUserName = true;
  constructor() { }

  ngOnInit(): void {
  }

  checkUserName(){
    return this.userName.length!=0;
  }
  resetUserName(){
    this.userName='';
  }

}
