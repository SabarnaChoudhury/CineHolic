import { NewReleaseServiceService } from './../new-release-service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  arr : any =[];
  trendingMovies : any =[];
  trendingBollywood : any=[];
  trendingHollywood : any=[];
  Filter : any = [];

  constructor(private trendingService : NewReleaseServiceService) { }

  ngOnInit(): void {

    this.arr = this.trendingService.getMovie();
    if (!this.arr) {
      this.trendingService.getData();
    }
    this.trendingService.getNewReleaseEventData().subscribe((data) => {
      this.arr = data;
      console.log(this.arr);
      this.trendingMovies = this.arr.filter( trend => trend.imdbRating > 8.5);
      this.Filter = this.arr.filter(filt => filt.imdbRating > 6);
      this.trendingBollywood = this.Filter.filter(bolly => bolly.Industry == "Bollywood");
      this.trendingHollywood = this.Filter.filter(holly => holly.Industry == "Hollywood");
      console.log(this.trendingBollywood);
    });
    this.trendingService.xyz().subscribe(data=>{
      this.arr=data;
      this.trendingMovies = this.arr.filter( trend => trend.imdbRating > 8.5);
      this.Filter = this.arr.filter(filt => filt.imdbRating > 6);
      this.trendingBollywood = this.Filter.filter(bolly => bolly.Industry == "Bollywood");
      this.trendingHollywood = this.Filter.filter(holly => holly.Industry == "Hollywood");
    })

  }

  showTrendingMovies() {
    if (this.trendingMovies.length == 0 || this.trendingMovies.Response == 'False')
      return false;
    else return true;
  }
  showBollywood() {
    if (this.trendingBollywood.length == 0 || this.trendingBollywood.Response == 'False')
      return false;
    else return true;
  }
  showHollywood() {
    if (this.trendingHollywood.length == 0 || this.trendingHollywood.Response == 'False')
      return false;
    else return true;
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  MovieToFav(movies) {
    const moveMovie = this.Filter.filter(movie => movie.Title == movies.Title)[0];
    this.trendingService.setFavouriteBolly(moveMovie);
    console.log(moveMovie);
  }

  MovieToWatchLater(movies){
    const moveWatch = this.arr.filter(movie => movie.Title == movies.Title)[0];
    this.trendingService.setWatchLater(moveWatch);
    console.log(moveWatch);
  }

}
