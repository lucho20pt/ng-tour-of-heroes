import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessagesService } from './messages/messages.service';
import { HEROES } from './mockup-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  messages?: string[];

  constructor(
    private messageService : MessagesService
  ) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id:number): Observable<Hero> {
    const hero = HEROES.find( h => h.id === id ) as Hero;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

}
