import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user?:any;
  constructor(public router:Router) { }
  
  ngOnInit(): void {
    if(sessionStorage != null){
      this.user = sessionStorage.getItem("obj");
    }  
  }
  logout() {
      sessionStorage.removeItem("obj");
      this.router.navigate(["login"]);
  }
}
