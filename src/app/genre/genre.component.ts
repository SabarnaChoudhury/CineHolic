import { SearchMovieService } from './../search-movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  res:any;
  genreMovies:any=[];
  constructor(private service:SearchMovieService) { }

  ngOnInit(): void {
  }

  genre(id){
    this.service.movieGenres(id).subscribe(response=>{
      this.res=response;
      this.genreMovies=this.res.results;
      console.log(this.genreMovies);
    })
  }

}
