import { NewReleaseServiceService } from './../new-release-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bollywood',
  templateUrl: './bollywood.component.html',
  styleUrls: ['./bollywood.component.css']
})
export class BollywoodComponent implements OnInit {
 
arr :any =[];
bollywood :any=[];

  constructor( private bollyservice : NewReleaseServiceService ) { }

  ngOnInit(){
    this.arr = this.bollyservice.getMovie();
    if (!this.arr) {
      this.bollyservice.getData();
    }
    this.bollyservice.getNewReleaseEventData().subscribe((data) => {
      this.arr = data;
      console.log(this.arr);
      this.bollywood = this.arr.filter(bolly => bolly.Industry == "Bollywood");
    });
    this.bollyservice.xyz().subscribe(data=>{
      this.arr=data;
      this.bollywood = this.arr.filter(bolly => bolly.Industry == "Bollywood");
    })
  }

  MovieToFav(movies) {
    const moveMovie = this.arr.filter(movie => movie.Title == movies.Title)[0];
    this.bollyservice.setFavouriteBolly(moveMovie);
    console.log(moveMovie);
  }

  MovieToWatchLater(movies){
    const moveWatch = this.arr.filter(movie => movie.Title == movies.Title)[0];
    this.bollyservice.setWatchLater(moveWatch);
    console.log(moveWatch);
  }

}
