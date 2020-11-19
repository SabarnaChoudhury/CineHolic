import { ProfileService } from './profile.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private login:ProfileService, private router:Router,private toastr: ToastrService) {
    
   }

  canActivate(){
    if(this.login.getUser())
    {
    return true;
    }
    this.router.navigate(['/login']);
    this.msg();
    return false;
  }
  msg(){
    this.toastr.error('Unauthorized user!! Login First');
  }
}
