import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchMovieService {

  constructor(public http:HttpClient) { }

  getMovies(movie){
    return this.http.get("http://www.omdbapi.com/?apikey=7995bf34&t="+movie)
  }
  searchMovies(movie){
    return this.http.get("http://www.omdbapi.com/?apikey=7995bf34&s="+movie)
  }
  movieGenres(id){
    return this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=7e58f14254edec350e1adb62d37624cd&language=hindi&page=1&primary_release_date.gte=2016-01-01&primary_release_date.lte=2020-12-31&with_genres="+id)
  }
}


