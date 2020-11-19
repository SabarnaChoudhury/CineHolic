import { NewReleaseServiceService } from './../new-release-service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  arr: any=[];
  comingSoon: any=[];
  soon : any = [];
  bollywoodComing: any=[];
  hollywoodComing: any=[];

  constructor(private ComingSoonService: NewReleaseServiceService) { }

  ngOnInit(): void {

    this.arr = this.ComingSoonService.getMovie();
    if (!this.arr) {
      this.ComingSoonService.getData();
    }
    this.ComingSoonService.getNewReleaseEventData().subscribe((data) => {
      this.arr = data;
      console.log(this.arr);
       this.soon = this.arr.filter(comingSoon => comingSoon.Year > 2020);
      this.comingSoon = this.soon.slice(0, 4);
      this.bollywoodComing = this.soon.filter(bolly => bolly.Industry == "Bollywood");
      this.hollywoodComing = this.soon.filter(holly => holly.Industry == "Hollywood");
    });
    this.ComingSoonService.xyz().subscribe(data=>{
      this.arr=data;
       this.soon = this.arr.filter(comingSoon => comingSoon.Year > 2020);
      this.comingSoon = this.soon.slice(0, 4);
      this.bollywoodComing = this.soon.filter(bolly => bolly.Industry == "Bollywood");
      this.hollywoodComing = this.soon.filter(holly => holly.Industry == "Hollywood");
     
    })

  }

  showComingSoon() {
    if (this.comingSoon.length == 0 || this.comingSoon.Response == 'False')
      return false;
    else return true;
  }
  showBollywood() {
    if (this.bollywoodComing.length == 0 || this.bollywoodComing.Response == 'False')
      return false;
    else return true;
  }
  showHollywood() {
    if (this.bollywoodComing.length == 0 || this.bollywoodComing.Response == 'False')
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
    const moveMovie = this.soon.filter(movie => movie.Title == movies.Title)[0];
    this.ComingSoonService.setFavouriteBolly(moveMovie);
    console.log(moveMovie);
  }

  MovieToWatchLater(movies){
    const moveWatch = this.arr.filter(movie => movie.Title == movies.Title)[0];
    this.ComingSoonService.setWatchLater(moveWatch);
    console.log(moveWatch);
  }


}
