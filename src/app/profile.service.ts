import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }
  activeProfile:any;
  user:boolean;
  getProfile(){
    return this.activeProfile;
  }

  setProfile(profile){
    this.activeProfile=profile;
  }

  getUser(){
    return this.user;
  }

  setUser(value){
    this.user=value;
  }
}
