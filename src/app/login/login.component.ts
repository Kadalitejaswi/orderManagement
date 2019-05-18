import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData={
    email:"",
    password:""
  }


  constructor( private auth:AuthService , private router:Router) { }

  ngOnInit() {
  }
  login(){
    return this.auth.userLogin(this.loginData).subscribe(res=>{
      console.log(res);
      console.log("Login sucessFull");
      
      this.router.navigate(['/orderpage'])
      

    },err=>{
      console.log(err);
      console.log("Login Failed");

      this.router.navigate(['/login']);
    }
    )
  }
}
