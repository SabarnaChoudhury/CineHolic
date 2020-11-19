import { NewReleaseServiceService } from './../new-release-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  arrMovie : any[];

  constructor( private favService : NewReleaseServiceService ) { }

  ngOnInit(): void {

    this.arrMovie = this.favService.getFavouriteBolly();
    
    this.favService.getFavouriteEventData().subscribe((data) => {
      this.arrMovie = data;
      console.log(this.arrMovie);
    });
  }

  remove(index){
    this.arrMovie.splice(index,1);
  }

  MovieToWatchLater(movies){
    const moveWatch = this.arrMovie.filter(movie => movie.Title == movies.Title)[0];
    this.favService.setWatchLater(moveWatch);
    console.log(moveWatch);
  }

}
