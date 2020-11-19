import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { userUrl } from 'src/app/config/api';
import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  
  isReadonly = true;
  enableEdit = false;
  currentUser : any;
  passwordType : string = 'password';
  passwordShown : boolean = false;
  showMe : boolean = true;
  showButton : boolean = true;

  constructor( private profile : ProfileService, private user : UserService ,private http : HttpClient,private toastr: ToastrService ) { }


  ngOnInit(): void {

    this.currentUser=this.profile.getProfile();
    console.log(this.currentUser);
  }

  form = new FormGroup({
    firstname : new FormControl( ),
    lastname : new FormControl( ),
    email : new FormControl( ),
    phoneNumber : new FormControl( ),
    password : new FormControl( )
  });

  get firstname(){
    return this.form.get('firstname');
  }
  get lastname(){
    return this.form.get('lastname');
  }
  get email(){
    return this.form.get('email');
  }
  get phoneNumber(){
    return this.form.get('phoneNumber');
  }
  get password(){
    return this.form.get('password');
  }

  toggleIcon(){
    this.showMe=!this.showMe;
  }

  toggleButton(){
    this.showButton=!this.showButton;
  }

  togglePassword(){
    if(this.passwordShown){
      this.passwordShown = false;
      this.passwordType = 'password';
    }
    else{
      this.passwordShown = true;
      this.passwordType = 'text';
    }
  }

  enableEditMethod(e) {
    this.enableEdit = true;
    console.log( e);
    this.isReadonly = false
  }
  cancel(){
    this.isReadonly = false;
  }
  save(){
    this.toastr.success('Your profile is updated!');
    this.isReadonly = true;
    this.user.UpdateUser(this.currentUser.id, this.currentUser.firstname, this.currentUser.lastname, this.currentUser.email, this.currentUser.phoneNumber, this.currentUser.password ).subscribe((result)=>{
      console.warn("result", result);
      
  })
  }
  

}
