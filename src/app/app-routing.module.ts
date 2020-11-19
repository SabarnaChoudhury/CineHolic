import { GenreComponent } from './genre/genre.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyNoticeComponent } from './privacy-notice/privacy-notice.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { LoginComponent } from 'src/app/signup/login/login.component';
import { BillingPageComponent } from './billing-page/billing-page.component';
import { CartComponent } from './cart/cart.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { TrendingComponent } from './trending/trending.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { SearchComponent } from './search/search.component';
import { BollywoodComponent } from './bollywood/bollywood.component';
import { HollywoodComponent } from './hollywood/hollywood.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {path:"home",component:NewReleasesComponent,canActivate:[AuthGuardService]},
  {path:"hollywood",component:HollywoodComponent,canActivate:[AuthGuardService]},
  {path:"bollywood",component:BollywoodComponent,canActivate:[AuthGuardService]},
  {path:"search",component:SearchComponent,canActivate:[AuthGuardService]},
  {path:"comingsoon",component:ComingSoonComponent,canActivate:[AuthGuardService]},
  {path:"trending",component:TrendingComponent,canActivate:[AuthGuardService]},
  {path:"favourite",component:FavouriteComponent,canActivate:[AuthGuardService]},
  {path:"watchlater",component:WatchLaterComponent,canActivate:[AuthGuardService]},
  {path : "movies/:Title", component : MovieDetailsComponent,canActivate:[AuthGuardService]},
  {path:"cart", component: CartComponent,canActivate:[AuthGuardService]},
  {path:"billing-page", component:BillingPageComponent,canActivate:[AuthGuardService]},
  {path:"login",component:LoginComponent},
  {path : "terms", component:TermsOfUseComponent},
  {path: "privacy", component:PrivacyNoticeComponent},
  {path: "aboutUs", component:AboutUsComponent},
  {path:"profile",component:ProfilePageComponent,canActivate:[AuthGuardService]},
  {path:'contact',component:ContactUsComponent,canActivate:[AuthGuardService]},
  {path:'genre',component:GenreComponent,canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
