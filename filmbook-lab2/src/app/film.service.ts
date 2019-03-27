import { Injectable } from '@angular/core';
import { Film } from './film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private filmList: Film[] = [];

  constructor() {
   }

  addFilm(film: Film) {
    this.filmList.push(film);
    this.updateLocalStorage();
    console.log(this.filmList);
  }
  updateLocalStorage() {
    localStorage.setItem(
      'filmlist',
      JSON.stringify(this.filmList)
    );
  }
  getFilmsFromLocalStorage() {
    this.filmList = JSON.parse(localStorage.getItem('filmlist'));
  }
  getFilms(): Film[] {
    return this.filmList;
  }
  getFilm(id: string): Film {
    return this.filmList.find(el => el.id === id);
  }
}
