import { Component, OnInit } from '@angular/core';
import { Fake } from '../fake.model';
import { FakeService } from '../fake.service';
@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit {
  fakeArray?:Array<Fake>;

  constructor(public fake:FakeService) { }  // DI for Fake Service
  //hook methods 
  ngOnInit(): void {      //life cycle : method function get call after constructor
    this.fake.getFakeData().subscribe(data=>this.fakeArray=data);
  }

  loadData() {
    this.fake.loadFakeData();    
  }
}
