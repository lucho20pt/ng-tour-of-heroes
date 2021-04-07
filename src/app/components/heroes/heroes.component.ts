import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  title: string = "Heroes";

  heroes: Hero[] = [];

  selectedHero?: Hero;

  constructor(
    public heroService : HeroService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: any) {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

  getHeroes() {
    this.heroService.heroes
      .subscribe(
        heroes => this.heroes = heroes
      );
  }

}
