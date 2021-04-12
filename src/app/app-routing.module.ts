import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: "", redirectTo: "home", pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "heroes",
    loadChildren: () => import ('./components/heroes/heroes.module').then( m => m.HeroesModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
