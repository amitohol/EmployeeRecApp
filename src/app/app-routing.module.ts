import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpDashComponent } from './emp-dash/emp-dash.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'dashboard',component:EmpDashComponent},
  {path:'forgotpass',component:ForgotpassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
