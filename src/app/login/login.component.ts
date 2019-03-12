import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotFoundError, AppError } from '../common';
import { Router } from '@angular/router';

const NOROLE = "NOROLE";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  roles = [
    {name:"homeowner",desc:"I want to give projects - Home Owner"},
    {name:"contractor",desc:"I want to take projects - Contractors"}
  ]
  constructor(private loginService: LoginService, private router: Router){}

  loginform = new FormGroup({
    username: new FormControl("",[Validators.required, Validators.minLength(4)])
  });

  signupform = new FormGroup({
    user_name: new FormControl("",[Validators.required, Validators.minLength(4)]),
    role: new FormControl("",[Validators.required])
  })
  

  submit(){
    console.log(this.username.value);
  }

  login(){
    this.loginService.login(this.username.value)
    .subscribe(
      response => {
        // route to Enter role page
        if(response){
          localStorage.setItem("sweetuser",JSON.stringify(response));
          let role = response["role"];
          this.router.navigate([`/${role}`]);
        }else{
          // set 'user doesn't exists' message in template
          this.loginform.setErrors({
            invalidLogin: true
          });
        }
      },
      (error: Response) => {
        if(error instanceof NotFoundError || error instanceof AppError){
          console.log(error);
        }else throw error;
      }
    )
  }

  signup(){
    // console.log(this.signupform.value);
    this.loginService.signup(this.signupform.value)
    .subscribe(
      response => {
        localStorage.setItem("sweetuser",JSON.stringify(response));
        // route to Enter role page
        let role = response["role"];
        this.router.navigate([`/${role}`]);
      },
      (error: Response) => {
        if(error instanceof NotFoundError || error instanceof AppError){
          console.log(error);
        }else throw error;
      }
    )
  }

  get username(){
    return this.loginform.get('username');
  }

  get signupuser(){
    return this.signupform.get('user_name');
  }

  get role(){
    return this.signupform.get('role');
  }

  ngOnInit() {
  }

}