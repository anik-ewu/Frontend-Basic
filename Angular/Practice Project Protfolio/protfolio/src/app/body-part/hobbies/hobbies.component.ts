import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {

  addNewHobby: boolean = false;
  newHobby: string = '';
  hobbies = [ 'Coading', 'Music', 'Sports'];
  constructor() { }

  ngOnInit(): void {
  }

  addingStatus() {
    this.addNewHobby = true;
  }
  hobbyAdded(){
    this.hobbies.push(this.newHobby);
    this.addNewHobby = false;
  }

}
