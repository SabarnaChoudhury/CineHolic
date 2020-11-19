import { ToastrService } from 'ngx-toastr';
import { ProfileService } from './../profile.service';
import { NewReleaseServiceService } from './../new-release-service.service';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'homepage-navbar',
  templateUrl: './homepage-navbar.component.html',
  styleUrls: ['./homepage-navbar.component.css']
})
export class HomepageNavbarComponent implements OnInit {
  currentUser:any;
  arrMovie:any=[];
  constructor( private Service : NewReleaseServiceService, private profile:ProfileService, private toastr: ToastrService) { }
 
  ngOnInit(): void {
    this.arrMovie = this.Service.getCart();
    
    this.Service.getCartEventData().subscribe(data => {
      this.arrMovie = data;
      });
      this.currentUser=this.profile.getProfile();
      console.log(this.currentUser);
  }
  msg(){
    this.toastr.success('Successfully Logged Out ! ');
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

 
}