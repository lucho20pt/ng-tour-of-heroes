import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { MessagesService } from './messages.service';

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
    public heroService : HeroService,
    public messageService : MessagesService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: any) {
    this.selectedHero = hero;
    console.log(this.selectedHero);
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes() {
    this.heroService.heroes
      .subscribe(
        heroes => this.heroes = heroes
      );
  }

}
