import { NewReleaseServiceService } from './../new-release-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-later',
  templateUrl: './watch-later.component.html',
  styleUrls: ['./watch-later.component.css']
})
export class WatchLaterComponent implements OnInit {
  
  arrMovie : any[];

  constructor( private watchService : NewReleaseServiceService ) { }

  ngOnInit(): void {

    this.arrMovie = this.watchService.getWatchLater();
    
    this.watchService.getWatchLaterEventData().subscribe((data) => {
      this.arrMovie = data;
      console.log(this.arrMovie);
    });

  }

  MovieToFav(movies) {
    const moveMovie = this.arrMovie.filter(movie => movie.Title == movies.Title)[0];
    this.watchService.setFavouriteBolly(moveMovie);
    console.log(moveMovie);
  }

  remove(index){
    this.arrMovie.splice(index,1);
  }

}
