import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  // selector: '[app-servers]',
  selector: 'app-servers',
  //in line template, more than three line create a file template
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  isClicked = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  username = '';
  serverCreated = false;
  servers = ['Test Server 1', 'Test Server 2', 'Test Server 3'];
  
  constructor() {
    //method executed at a point time that this component is create by Angular
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onUpdateUsername(event) {
    this.username = event.target.value;
  }

  onResetUseranme() {
    this.username = '';
    if (this.isClicked) {
      this.isClicked = false;
      this.username = 'Savatore Dininni';
    } else {
      this.isClicked = true;
      this.username = '';
    }
  }

  onCreateServer() {
    if (this.isClicked) {
      this.serverCreated = false;
      this.isClicked = false;
      return (this.serverCreationStatus = 'No server was created!');
    } else {
      this.serverCreated = true;
      this.isClicked = true;
      return (this.serverCreationStatus =
        'Server was created! The name is ' + this.serverName);
    }
  }
}
