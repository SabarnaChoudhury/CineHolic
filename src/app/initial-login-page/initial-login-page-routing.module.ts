import { SignupComponent } from './../signup/signup.component';
import { Advertisement1Component } from './advertisement1/advertisement1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"",component:Advertisement1Component},
  {path:"signup",component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitialLoginPageRoutingModule { }
