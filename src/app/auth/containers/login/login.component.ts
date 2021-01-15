import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  is_signup:boolean = false;
  loginForm: FormGroup;
  signupForm: FormGroup;
  invalidLogin: boolean = false;
  invalidSignup: boolean = false;
  accepted :any = [false,false,false,false];
  messages:string[] =[];
  number1:number = 0;
  number2:number = 0;
  password_not_strong:boolean = false;
  incorrect_answer:boolean = false;
  invalid_email:boolean = false;
  invalid_username:boolean = false;
  username_messages:string[] =[];
  user_exist:boolean = false;
  bad_credentials:boolean = false;

  usernamemessages:string[]=[] ;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: AuthService) { }
show=false;
  login() {
    this.bad_credentials = false;

    this.show =false;
    if (this.loginForm.invalid) {
      return;
    }
    const body = new HttpParams()
      .set('username', this.loginForm.controls.username.value)
      .set('password', this.loginForm.controls.password.value)
      .set('grant_type', 'password');

      this.apiService.login({username:this.loginForm.controls.username.value,password: this.loginForm.controls.password.value}).subscribe(
        (data:any) => { 
        if(data = 'Bad credentials') {this.messages =[];this.messages.push(data),this.bad_credentials=true};
          
        this.router.navigate(['/home']);
      }),(err) => {this.messages = err.error.message;};
      this.router.navigate(['/home']);
  }

  signup() {
    this.show =false;
    this.messages = [];
    this.username_messages = [];
    this.user_exist = false;
    this.invalid_email = false;
    this.password_not_strong = false;
    this.invalid_username = false;

    if (this.signupForm.invalid) {
      return;
    }
    if(this.number1 + this.number2 != (+this.signupForm.controls.number.value)){
      this.incorrect_answer = true;

      return;
    }
    this.apiService
        .signup(this.signupForm.value)
        .subscribe(data => {
          const body = new HttpParams()
          .set('username', this.signupForm.controls.username.value)
          .set('password', this.signupForm.controls.password.value)
          .set('grant_type', 'password');

          this.apiService.login({username:this.signupForm.controls.username.value,password: this.signupForm.controls.password.value}).subscribe(
            (data:any) => { 
            this.router.navigate(['/home']);
          });
        },(err) => {
          if (err.error.message=="Username already exists"){
            this.user_exist = true;
            this.username_messages.push("Username already exists");
            this.invalid_username = true;

          } else
          {
            this.messages = err.error.message;
            this.messages.forEach(
              e=>{
                if(e=="Password is too weak")
                  this.password_not_strong = true;
                else if(e=="Invalid Email"){
                  this.invalid_email = true;
                } else if(e=="Invalid Username")
                {
                  this.invalid_username = true;
                  if(this.messages[1] == "username must be longer than or equal to 4 characters")
                  {
                    this.username_messages.push(this.messages[1]);

                  } else if(this.messages[1] == "username must be shorter than or equal to 22 characters"){
                    this.username_messages.push(this.messages[1]);

                  }
                  else{

                    this.username_messages.push("Invalid Username");

                  }
                }

              }
            )
          }
          
        console.log(this.messages)} );
      this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.number1 = Math.floor(Math.random() * 10) + 1  ;
    this.number2 = Math.floor(Math.random() * 10) + 1  ;
    window.sessionStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });

    this.signupForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      country: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required],
      number:['', Validators.required],
    });
  }
}