import { Component } from '@angular/core';

//decorator 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // you can point to other style sheet
})
export class AppComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  constructor() {
    //method executed at a point time that this component is create by Angular
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
}
