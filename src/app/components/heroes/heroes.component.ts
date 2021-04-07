import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mockup-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  title: string = "Heroes";

  // hero: Hero = {
  //   id: 1,
  //   name: "Super Man"
  // }

  heroes = HEROES;

  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: any) {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

}
