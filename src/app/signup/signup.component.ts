import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService } from 'src/app/services/user.service';
import  {trigger, transition, useAnimation}  from  "@angular/animations";


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
 
})
export class SignupComponent implements OnInit {
  alert: boolean;
  len:any=[];
  newUser:any;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }
  registerForm: FormGroup;
  submitted = false;

  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        phoneNumber: ['', [Validators.required, Validators.pattern('[1-9][0-9]{9}')]],
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
      this.submitted=false;
      
    }, 3000);
    // if(this.submitted)
    // {
      
      
    // }
}
collection(){
  this.user.getuserDetails().subscribe(response=>{
    this.len=response;
    this.fn();
  
  })
}
fn(){
  this.newUser=this.registerForm.value;
  this.newUser.id=this.len.length;
  console.log(this.newUser);
  this.user.addUser(this.newUser,this.len.length).subscribe((result)=>{
    console.warn("result", result);
    this.alert = true;
})
}
closeAlert(){
  this.alert =false;
}


}
