import { OwlOptions } from 'ngx-owl-carousel-o';
import { NewReleaseServiceService } from './../new-release-service.service';
import { SearchMovieService } from './../search-movie.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movieData: any = [];
  obj:any;
  relatedObj:any;
  movieName: any;
  searchedMovies: any = [];
  relatedMovies:any=[];
  arr_genre: any = [];
  temp: any = [];
  constructor(public service: SearchMovieService, public relatedSearchService: NewReleaseServiceService) {
  
  }

  ngOnInit() {
  }

  form = new FormGroup({
    'searchInput': new FormControl()
  })

  search() {
    if (this.form.value.searchInput == null)
      this.movieName = " ";
    else
      this.movieName = this.form.value.searchInput;
    this.service.searchMovies(this.movieName)
      .subscribe(data => {
        this.obj = data;
        this.movieData=this.obj.Search;
        
      });
      this.service.getMovies(this.movieName)
      .subscribe(data=>{
        this.relatedObj=data;
        this.relatedSearch(this.relatedObj.Genre);
      })

  }

  show() {
    if (this.movieData.length == 0 || this.movieData.Response == 'False')
      return false;
    else return true;
  }

  relatedSearch(genre) {
    this.relatedSearchService.getToDos()
      .subscribe(response => {
        this.searchedMovies = response;
        console.log(this.searchedMovies);
        this.arr_genre = genre.split(',');
        console.log(this.arr_genre);
        this.relatedMovies = this.searchedMovies.filter(data => {
          this.temp = data.Genre.split(',');
          // if(this.temp.includes(this.arr_genre[0]) || this.temp.includes(this.arr_genre[1]))
          // return true;
          return this.temp.some(element=>this.arr_genre.includes(element));
        });
        console.log(this.relatedMovies);
      })
    
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

  MovieToWatchLater(movies){
    const moveWatch = this.searchedMovies.filter(movie => movie.Title == movies.Title)[0];
    this.relatedSearchService.setWatchLater(moveWatch);
    console.log(moveWatch);
  }
  MovieToFav(movies) {
    const moveMovie = this.searchedMovies.filter(movie => movie.Title == movies.Title)[0];
    this.relatedSearchService.setFavouriteBolly(moveMovie);
    // console.log(moveMovie);
  }
  AddToFav(movies) {
    console.log(this.movieData);
    const moveMovie = this.movieData.filter(movie => movie.Title == movies.Title)[0];
    this.relatedSearchService.setFavouriteBolly(moveMovie);
    // console.log(moveMovie);
  }
        
}

