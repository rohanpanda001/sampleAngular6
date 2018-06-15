import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreatedStatus = 'No Server created';
  serverName = '';
  serverCreated = false;
  servers = ["Test1", "Test2"];
  message = "test message"

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer()
  {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreatedStatus = 'Server was created. Name: ' + this.serverName;
  }

  onUpdateServerName(event : Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
