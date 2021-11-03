import { CounterService } from './counter.service';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  providers: [UserService]
})
export class AppComponent implements OnInit{

  activeUsers  = [];
  inactiveUsers = [];

  constructor(private userService: UserService, private counterService: CounterService){
  }

  ngOnInit(){
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }

}
