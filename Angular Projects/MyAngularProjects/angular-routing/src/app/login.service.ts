import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }

  checkLogin():Observable<Login[]> {
    return this.http.get<Login[]>("http://localhost:3030/login");
  }

  createLogin(login:any):Observable<Login>{
    return this.http.post<Login>("http://localhost:3030/login",login);
  }
}
