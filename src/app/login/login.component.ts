
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public loginForm !: FormGroup;

  constructor(private formbuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email:[''],
      password:['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/signupUsers").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.emp_email === this.loginForm.value.email && a.emp_pass === this.loginForm.value.password
      });
      if(user){
        console.log(user);
        alert("You Logged In");
        this.loginForm.reset();
        this.router.navigate(['dashboard']);
      }else{
        alert("User Not Found");
        console.log(this.loginForm.value.email);
      }
    }, err=>{
      alert("Something went wrong...")
    })
  }
}
