import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  // userData!: any;
  constructor(private router:Router, private loginService:LoginService) { }

  ngOnInit(): void {
  }
  onLogin(){
    this.loginService.getUserDetails(this.username, this.password).subscribe((data: any)=>{
      console.log(data);
      // this.userData = data;
      localStorage.setItem('username',data.username);
      localStorage.setItem('userid',data.id);
      localStorage.setItem('phone',data.phone);
      localStorage.setItem('status',data.enabled?'Active':'Inactive');
    });
    this.router.navigate(['/dashboard']);
  }
}
