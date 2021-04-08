import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessagesService } from './messages.service';
import { HEROES } from './mockup-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  messages?: string[];

  constructor(
    public messageService : MessagesService
  ) { }

  public get heroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

}
