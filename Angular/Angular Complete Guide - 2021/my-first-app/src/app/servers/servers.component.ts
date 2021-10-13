import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers = ['Testserver', 'Test 2'];

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName='Test Server Name';
  serverCreated = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created';
  }
  onUpdateServerName(event: Event){
      console.log(event);
      this.serverName = (<HTMLInputElement>event.target).value;
  }

}
