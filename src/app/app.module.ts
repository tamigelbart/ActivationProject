import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { Http2ServerRequest } from 'http2';
//import {HttpClient} 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShoeResultComponent } from './shoe-result/shoe-result.component';

@NgModule({
  declarations: [
    AppComponent,ShoeResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
