import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'no server created';
  serverName = '';
  serverCreated = false;
  servers = ['one', 'two'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
   }

  ngOnInit() {}

  onServerCreation() {
    this.serverCreated = true;
    this.serverCreationStatus = 'server was created! name is ' + this.serverName;
    this.servers.push(this.serverName);
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

}