import { Component } from '@angular/core';

@Component({
  selector: 'abc',   // user-defined tag
  templateUrl: './app.component.html',  // connect the html page
  styleUrls: ['./app.component.css']    // connect to css page
})
export class AppComponent {
  name ="Ravi";
}
