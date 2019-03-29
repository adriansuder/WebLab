import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private filmList: Film[] = [];

  constructor() { }

  getFilmsFromLocalStorage() {
    this.filmList = JSON.parse(localStorage.getItem('filmlist')) || [];
  }

  addFilm(film: Film) {
    this.filmList.push(film);
    localStorage.setItem(
      'filmlist',
      JSON.stringify(this.filmList)
      );
  }
  getFilm(id: string): Film {
    return this.filmList.find(el => el.id === id);
  }

  getFilms(): Film[] {
    return this.filmList;
  }
}
