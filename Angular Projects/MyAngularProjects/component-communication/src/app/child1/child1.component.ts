import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input()    // This decorator help to recevieve value from parent to child 
  pname?:string;

  childName?:string;

  @Output()
  eventRef = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  
  storeData(childRef:any){
    this.childName= childRef.value;
    this.eventRef.emit(this.childName);   // ready to pass the value 
                                    // to parent component
  }
}
