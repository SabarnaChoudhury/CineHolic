import { NewReleaseServiceService } from './../new-release-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hollywood',
  templateUrl: './hollywood.component.html',
  styleUrls: ['./hollywood.component.css']
})
export class HollywoodComponent implements OnInit {

arr : any= [];
hollywood : any =[];

  constructor(private hollyservice : NewReleaseServiceService) { }

  ngOnInit(): void {
    this.arr = this.hollyservice.getMovie();
    if (!this.arr) {
      this.hollyservice.getData();
    }
    this.hollyservice.getNewReleaseEventData().subscribe((data) => {
      this.arr = data;
      console.log(this.arr);
      this.hollywood = this.arr.filter(holly => holly.Industry == "Hollywood");
    });
    this.hollyservice.xyz().subscribe(data=>{
      this.arr=data;
      this.hollywood = this.arr.filter(bolly => bolly.Industry == "Hollywood");
    })
  }

  MovieToFav(movies) {
    const moveMovie = this.arr.filter(movie => movie.Title == movies.Title)[0];
    this.hollyservice.setFavouriteBolly(moveMovie);
    console.log(moveMovie);
  }

  MovieToWatchLater(movies){
    const moveWatch = this.arr.filter(movie => movie.Title == movies.Title)[0];
    this.hollyservice.setWatchLater(moveWatch);
    console.log(moveWatch);
  }

}
