import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Hero} from '../hero'
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {

  constructor(private heroservice:HeroService) { this.getHeroes();}

  ngOnInit() {
    
  }

  Heroes:Hero[]

   getHeroes():void{
  this.heroservice.getHeroes().subscribe(heroes=>{
    this.Heroes= heroes;
  });

  }
}

