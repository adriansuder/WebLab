import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewFilmComponent } from './new-film/new-film.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';

const routes: Routes = [
  {
   path: 'new-film',
   component: NewFilmComponent 
  },
  {
    path: 'film/:id',
    component: FilmDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
