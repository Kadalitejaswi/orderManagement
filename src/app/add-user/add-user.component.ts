import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private auth:AuthService,
    private formBuilder:FormBuilder,
    private router:Router) { }
    userObject: FormGroup;
  ngOnInit() {
    this.userObject = this.formBuilder.group({
      number: [''],
      date: [''],
      first_name: ['', [Validators.minLength(4)]],
      address: [''],
      phone: [''],
      total: [''],
 
    });
  }

 
 

  onSubmit(){
    console.log(this.userObject.value);
    this.auth.postRequest('products/new',this.userObject.value).subscribe((response)=>{
      console.log(response);
      if(response.status == true){
        this.router.navigate(['/orderpage']);
      }
    })
  }
  

}
