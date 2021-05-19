import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';// third party js library 
import { Fake } from './fake.model';
@Injectable({
providedIn: 'root' // it is consider as provider attribute in app.module.ts 
})
export class FakeService {
constructor(public http:HttpClient) { }   //DI for HttpClient API
  loadFakeData(){
    this.http.get("https://jsonplaceholder.typicode.com/todos").
    subscribe(data=>console.log(data),
    error=>console.log(error),
    ()=>console.log("completed"));
  }
  getFakeData():Observable<Fake[]> {
  return this.http.get<Fake[]>("https://jsonplaceholder.typicode.com/todos")
  }
}
