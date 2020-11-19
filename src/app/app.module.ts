import { GenreComponent } from './genre/genre.component';
import { ProfileService } from './profile.service';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AuthGuardService } from './auth-guard.service';
import { SearchMovieService } from './search-movie.service';
import { NewReleaseServiceService } from './new-release-service.service';
import { PrivacyNoticeComponent } from './privacy-notice/privacy-notice.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from 'src/app/signup/login/login.component';
import { BillingPageComponent } from './billing-page/billing-page.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';
import { TrendingComponent } from './trending/trending.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { HollywoodComponent } from './hollywood/hollywood.component';
import { HttpClientModule } from '@angular/common/http';
import { InitialLoginPageModule } from './initial-login-page/initial-login-page.module';
import { NgbdDropdownForm } from './dropdown-form/dropdown-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageNavbarComponent } from './homepage-navbar/homepage-navbar.component';
import { HomepageFooterComponent } from './homepage-footer/homepage-footer.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavOptionsComponent } from './nav-options/nav-options.component';
import { SignupComponent } from './signup/signup.component';
import { BollywoodComponent } from './bollywood/bollywood.component';
import { SearchComponent } from './search/search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    AppComponent,
    NgbdDropdownForm,
    HomepageNavbarComponent,
    HomepageFooterComponent,
    NgbdDropdownForm,
    NewReleasesComponent,
    NavOptionsComponent,
    SignupComponent,
    HollywoodComponent,
    BollywoodComponent,
    SearchComponent,
    ComingSoonComponent,
    FavouriteComponent,
    TrendingComponent,
    WatchLaterComponent,
    MovieDetailsComponent,
    CartComponent,
    BillingPageComponent,
    LoginComponent,
    AboutUsComponent,
    TermsOfUseComponent,
    PrivacyNoticeComponent,
    ProfilePageComponent,
    ContactUsComponent,
    GenreComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    InitialLoginPageModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-center',
      progressBar : true,
      progressAnimation : 'increasing'
    })
  ],
  providers: [
    NewReleaseServiceService,
    SearchMovieService,
    AuthGuardService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
