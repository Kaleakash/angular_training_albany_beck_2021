import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  msg:string="";
  designation:string="Tester";
  constructor() { }

  ngOnInit(): void {
  }

  fun() : void{
    console.log("Event fired...")
    this.msg = "Welcome to Angular event"
    this.designation="Developer";
  }
}
