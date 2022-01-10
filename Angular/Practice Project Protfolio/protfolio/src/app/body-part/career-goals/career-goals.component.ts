import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'career-goals',
  templateUrl: './career-goals.component.html',
  styleUrls: ['./career-goals.component.scss']
})
export class CareerGoalsComponent implements OnInit {

  

  viewMore = false;
  constructor() { }

  ngOnInit(): void {
  }

  viewMode(){
    this.viewMore = !this.viewMore;
  }

}
