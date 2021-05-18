import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-login-page',
  templateUrl: './tdf-login-page.component.html',
  styleUrls: ['./tdf-login-page.component.css']
})
export class TdfLoginPageComponent implements OnInit {
  result:string="";
  constructor() { }

  ngOnInit(): void {
  }
  checkUser(loginRef:any){
    //console.log("Event fired...")
    //console.log(loginRef.value)
    let user = loginRef.value.user;
    let pass = loginRef.value.pass;
    if(user == "Ajay" && pass == "123"){
        this.result="Successfully LOgin!"
    }else {
        this.result="Failure try once again"
    }
  }
}
