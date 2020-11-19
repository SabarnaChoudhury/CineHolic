import { FormControl, FormGroup } from '@angular/forms';
import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  user:any;
  constructor(private service:ProfileService,private toastr: ToastrService) { }

  ngOnInit(){
    this.user=this.service.getProfile();
    console.log(this.user);
  }
  form=new FormGroup({
    message:new FormControl()
  });
  reset(){
    this.form.reset();
    this.toastr.info("Thank You!! We'll reply to your message shortly.");
  }

}
