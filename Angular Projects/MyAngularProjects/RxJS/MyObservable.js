import {Observable} from 'rxjs';
let sub = Observable.create((sub)=> {
    sub.next("Hi")
    //sub.error("Error Generated")
    sub.next("Hello");
    sub.next("How r you")
    sub.complete()
});
//this.http.get("url")  : it give objservable object. 

sub.subscribe(data=>console.log(data),
err=>console.log(err),
()=>console.log("completed"))