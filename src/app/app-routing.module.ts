import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderpageComponent } from './orders/orderpage/orderpage.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {path:"", component:LoginComponent },

  {path:"login", component:LoginComponent },
  {path:"addUser", component:AddUserComponent },

  {path:"orderpage", component:OrderpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
