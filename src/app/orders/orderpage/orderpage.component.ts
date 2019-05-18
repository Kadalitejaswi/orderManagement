import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../../auth.service";
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {
  userDetails = [{"orderNo":1,"dueDate":"1-2-2019","name":"John","address":"HYD","phone":"9874563210","orderTotal":"500"},
                 {"orderNo":2,"dueDate":"2-3-2019","name":"Smith","address":"HYD","phone":"9638527410","orderTotal":"300"}];
  userObject: FormGroup;
  _isEditing = false;
  constructor(public auth:AuthService,private http:HttpClientModule,
    private fb: FormBuilder,
    private router:Router){
  }

 

  ngOnInit():void{
 
    this.userObject = this.fb.group({
      number: [''],
      date: [''],
      first_name: ['', [Validators.minLength(4)]],
      address: [''],
      phone: [''],
      total: [''],
     
    });
  }

 
  addUser(){
    console.log('add user button clicked');
    this.router.navigateByUrl('/addUser');
  }
  

}
