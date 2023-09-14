import { Component } from '@angular/core'

//decorator
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html', //point to the html template, in the same folder
  // styleUrls: ['./server.component.css']
  // inline styles
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent {
  serverId = 22;
  serverStatus = 'offline';
  users = [
    { id: 0, name: 'John', country: 'UK', profession: 'Financial Analist' },
    { id: 1, name: 'Marco', country: 'IT', profession: 'Mechanic' },
    { id: 2, name: 'Lilli', country: 'FR', profession: 'Chef de cusine' },
    { id: 3, name: 'Carlos', country: 'ESP', profession: 'Architect' },
    { id: 4, name: 'Andre', country: 'GER', profession: 'Banker' },
  ];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}