import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  title: string = "List of Heroes";

  hero: string = "Super Man";

  constructor() { }

  ngOnInit(): void {
  }

}
