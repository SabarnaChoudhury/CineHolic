import { SearchMovieService } from './../search-movie.service';
import { NewReleaseServiceService } from './../new-release-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  arrMovie : any[] =[];
  MovieDetails : any[] = [];
  array:any=[];
  title = "";
  movie:any=[];

  constructor( private movieService : SearchMovieService, private route : ActivatedRoute,private cartService:NewReleaseServiceService ) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.params.Title;

    this.movieService.getMovies(this.title).subscribe(data=>{
      this.movie=data;
      
    })
    

  }
  addToCart(movie){
    this.cartService.setCart(movie);
    
  }

}
