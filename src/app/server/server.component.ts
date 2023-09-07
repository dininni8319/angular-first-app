import { Component } from '@angular/core'

//decorator
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html', //point to the html template, in the same folder
    // styleUrls: ['./server.component.css']
    // inline styles
    styles: [` 
        h3 {
            color: red;
        }
    `]
}) 

export class ServerComponent {

}