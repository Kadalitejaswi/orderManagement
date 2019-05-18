import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl="http://localhost:4080/api"
  constructor( private http:HttpClient, private router:Router) { }

  userLogin(user){
    return this.http.post<any>(this._loginUrl+'/'+"login",user)
  }

  postRequest(url,payload){
    return this.http.post<any>(this._loginUrl+'/'+url,payload)
  }


  getRequest(url,payload){
    return this.http.post<any>(this._loginUrl+'/'+url,payload)
  }
}
