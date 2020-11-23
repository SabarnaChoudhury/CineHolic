import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
 
  medha : string = "assets/images/medhashree.jpg";
  sabu : string = "assets/images/sabarna.jpg";
  udit : string = "assets/images/udit.png";
 
  constructor() { }
 
  ngOnInit(): void {
  }
 
}