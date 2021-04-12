import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages/messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  title: string = "Heroes";

  heroes: Hero[] = [];

  selectedHero?: Hero;

  constructor(
    private heroService : HeroService,
    private messageService : MessagesService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  // onSelect(hero: any) {
  //   this.selectedHero = hero;
  //   console.log(this.selectedHero);
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(
        heroes => this.heroes = heroes
      );
  }

}
