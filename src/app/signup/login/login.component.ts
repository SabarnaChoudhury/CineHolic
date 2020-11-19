import { ProfileService } from './../../profile.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userFound: boolean = false;
  alert1: boolean = false;
  login: any;

  constructor(private formBuilder: FormBuilder, 
    private user: UserService, 
    private router:Router,
    private profile:ProfileService,
    private toastr: ToastrService) { }
  registerForm: FormGroup;
  submitted = false;

  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

   setTimeout(() => {
      this.collection();
      this.submitted = false;
      
    }, 3000);
    // if(this.submitted)
    // {
      
      
    // }
}
collection(){
  // console.warn(this.registerForm.value)
  this.user.getuserDetails().subscribe((result)=>{
    this.login = result;
    // console.warn("result", this.login);
    // console.warn("result", this.login.length);
    // console.warn("result", (this.login[0]).user.email);
    // console.warn("result", this.registerForm.value.email);
    // console.warn("result", this.registerForm.value.password);
    console.log(this.login);
    for(let i=0 ; i< this.login.length; i++)
    {
        if (this.login[i].email === this.registerForm.value.email && this.login[i].password === this.registerForm.value.password)
        {
            console.log("User Found" , this.login[i]);
            this.userFound = true;
            this.alert1 = false;
            this.msg();
            this.profile.setProfile(this.login[i]);
            this.profile.setUser(this.userFound);
        }
    }
    if(this.userFound!==true){
      console.log("User not found");
      this.alert1 = true;
      this.userFound = false;
    };
    this.signin();
  })
}
closeAlert(){
  this.alert1 =false;
}
signin(){
  console.log(this.userFound);
  if(this.userFound){
  this.router.navigateByUrl('/trending');
  }
}

msg(){
  this.toastr.success('Successfully Logged in ! ');
}

}
