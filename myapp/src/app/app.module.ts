import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule}from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service';
import { HttpClient } from 'selenium-webdriver/http';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
