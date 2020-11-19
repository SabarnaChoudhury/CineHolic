import { NewReleaseServiceService } from './../new-release-service.service';
import { Component, OnInit} from '@angular/core';
import { from, Observable } from 'rxjs';
import { filter, map, toArray } from 'rxjs/operators';

@Component({
  selector: 'new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css'],
})
export class NewReleasesComponent implements OnInit { 

  arr : any=[];
  topPicksMovies : any=[];
  bollywoods : any=[];
  hollywoods : any=[];
  array:any=[];

  constructor(private movieservice : NewReleaseServiceService) { }

  ngOnInit(){
    this.arr = this.movieservice.getMovie();
    if (!this.arr) {
      this.movieservice.getData();
    }
    this.movieservice.getNewReleaseEventData().subscribe((data) => {
      this.arr = data;
      // console.log(this.arr);
      this.topPicksMovies = this.arr.filter( trend => trend.imdbRating > 8);
      this.bollywoods = this.arr.filter(bolly => bolly.Industry == "Bollywood").slice(0,4);
      this.hollywoods = this.arr.filter(holly => holly.Industry == "Hollywood").slice(0,4);
    });

    this.movieservice.xyz().subscribe(data=>{
        console.log(data);
         this.array=data;
      // console.log(this.arr);
      this.topPicksMovies = this.array.filter( trend => trend.imdbRating > 8);
      this.bollywoods = this.array.filter(bolly => bolly.Industry == "Bollywood").slice(0,4);
      this.hollywoods = this.array.filter(holly => holly.Industry == "Hollywood").slice(0,4);
    })
    
  }

  showTopPicks() {
    if (this.topPicksMovies.length == 0 || this.topPicksMovies.Response == 'False')
      return false;
    else return true;
  }
  showBollywood() {
    if (this.bollywoods.length == 0 || this.bollywoods.Response == 'False')
      return false;
    else return true;
  }
  showHollywood() {
    if (this.hollywoods.length == 0 || this.hollywoods.Response == 'False')
      return false;
    else return true;
  }

  MovieToFav(movies) {
    const moveMovie = this.arr.filter(movie => movie.Title == movies.Title)[0];
    this.movieservice.setFavouriteBolly(moveMovie);
    // console.log(moveMovie);
  }

  MovieToWatchLater(movies){
    const moveWatch = this.arr.filter(movie => movie.Title == movies.Title)[0];
    this.movieservice.setWatchLater(moveWatch);
    // console.log(moveWatch);
  }


}
