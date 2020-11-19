import { NewReleaseServiceService } from './../new-release-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  arrMovie:any=[];
  moviePrice:any=[];
  cost:any;
  constructor(private cartService:NewReleaseServiceService) { 
    this.arrMovie = this.cartService.getCart();
    this.cartService.getCartEventData().subscribe(data => {
      this.arrMovie = data;
      })
  }

  ngOnInit(){
  }

  remove(i){
    this.arrMovie.splice(i,1);
    this.moviePrice=[];
    this.cost=0;
  }
  price(){
    console.log(this.arrMovie);
    this.moviePrice=[];
    this.arrMovie.forEach(data=>{
      this.moviePrice.push(parseFloat(data.imdbRating)*5);
    })
    
    this.cost=this.moviePrice.reduce((acc,cur)=>acc+cur,0);
   
    return this.cost;
  }

  show(){
    if(this.arrMovie.length==0)
    return false;
    else return true;
  }

}
