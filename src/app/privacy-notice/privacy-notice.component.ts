import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-notice',
  templateUrl: './privacy-notice.component.html',
  styleUrls: ['./privacy-notice.component.css']
})
export class PrivacyNoticeComponent implements OnInit {

  constructor( private toastr: ToastrService ) { }

  ngOnInit(): void {
  }

  ifYes(){
    this.toastr.info('Thank You for your feedback ! ');
  }

  ifNo(){
    this.toastr.info('We will look into this matter ');
  }

}
