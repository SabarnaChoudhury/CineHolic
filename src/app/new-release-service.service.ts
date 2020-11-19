import { ToastrService } from 'ngx-toastr';
import { EventEmitter, Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewReleaseServiceService {

  constructor( private http : HttpClient, private toastr: ToastrService) { }

movieArray : any[];
getFavBolly : any [] = [];
getWatch : any [] = [];
Cart:any=[];
price:any=[];

private newReleaseEvent = new EventEmitter();
private favouriteEvent = new EventEmitter();
private watchLaterEvent = new EventEmitter();
private cartEvent=new EventEmitter();
private url = "https://jsonblob.com/api/8b4f8686-191e-11eb-8971-23cca3242754";

xyz(){
  return this.http.get(this.url);
}
 
getData(){
  return this.http.get(this.url).subscribe((data) => {
    this.setMovie(data);
    // console.log(data);
  });
}

    getMovie(){
      return this.movieArray;
    }

    setMovie(mov) {
       this.movieArray = mov;
       this.newReleaseEvent.emit(this.movieArray);
      //  console.log(this.movieArray);
    }

     getNewReleaseEventData() {
      return this.newReleaseEvent;
    }

    getFavouriteEventData() {
      return this.favouriteEvent;
    }

    getWatchLaterEventData(){
      return this.watchLaterEvent;
    }

    getCartEventData(){
      return this.cartEvent;
    }

    setCart(mov){
      if(this.Cart.filter(movie => movie.Title == mov.Title)[0]){
        this.toastr.warning('Already added to your CineHolic Cart ');
      }
      else{
      this.Cart.push(mov);
      this.cartEvent.emit(this.Cart);
      this.toastr.success('Your Movie is Successfully added to your CineHolic Cart!!');
      console.log(this.Cart);}
    }

    setFavouriteBolly(bolly){
      if(this.getFavBolly.filter(movie => movie.Title == bolly.Title)[0]){
        this.toastr.warning('Already added To CineHolic Favourite List !');
      }
      else{
      this.getFavBolly.push(bolly);
      this.favouriteEvent.emit(this.getFavBolly);
      this.toastr.success('Added to your CineHolic Favorite List !');
      console.log(this.getFavBolly);}
    }

    getCart(){
      return this.Cart;
    }

    getPrice(){
      return this.price;
    }

    getFavouriteBolly(){
      return this.getFavBolly;
    }

    setWatchLater(mov){
      if(this.getWatch.filter(movie => movie.Title == mov.Title)[0]){
        this.toastr.warning('Already added to CineHolic Watch Later List !');
      }
      else{
      this.getWatch.push(mov);
      this.watchLaterEvent.emit(this.getWatch);
      this.toastr.success('Added to your CineHolic Watch Later List !');
      console.log(this.getWatch);}
    }

    getWatchLater(){
      return this.getWatch;
    }


    
    //updateEmployee = (a , b, c, d) => { 
      //from(this.getEmployee()).pipe(
        //map((item) => item.associateId === b
          //? ((item.associateName = a),
          //(item.projectId = c),
          //(item.isSelected = d))
          //: item),
        //toArray()
      //)
      //.subscribe()
    //};




    getToDos(){
      return this.http.get(this.url);
    }
}

