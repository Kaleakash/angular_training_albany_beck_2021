import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fname:string="Ajay Kumar";
  salary:number = 50000;
  dd = new Date();
}
