import { Component } from '@angular/core';

// import {display1} from '.a';

@Component({
  selector: 'app-root',   // user-defined tag name<app-root></app-root>
  templateUrl: './app.component.html',    // template 
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  id:number=100;
  name:string="Raj Deep"; 
  result : boolean = true;
  
  display() : string {
    return "Welcome "+this.name;
  }

}
