import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialLoginPageRoutingModule } from './initial-login-page-routing.module';
import { Advertisement1Component } from './advertisement1/advertisement1.component';


@NgModule({
  declarations: [Advertisement1Component],
  imports: [
    CommonModule,
    InitialLoginPageRoutingModule
  ],
  exports:[
    Advertisement1Component
  ]
})
export class InitialLoginPageModule { }
