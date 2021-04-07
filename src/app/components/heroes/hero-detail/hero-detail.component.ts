import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  template: `
    <div class="form-group" *ngIf="hero">

      <label class="mx-1" for="hero-name">
        {{hero.name}}
      </label>

      <input class="form-control mx-1" type="text" name="hero-name"
        placeholder="hero..."
        [(ngModel)]="hero.name"
      >
      
    </div>
  `,
  styles: [
  ]
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
