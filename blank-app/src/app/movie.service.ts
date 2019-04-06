import {Movie} from '.movie.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieList: Movie[] = [];
  constructor() { }

  addFilm(newMovie: Movie): void {
    this.movieList.push(newMovie);
    this.saveInLocalStorage();
  }

  private saveInLocalStorage() {
    localStorage.setItem('movieList', JSON.stringify(this.movieList));
  }
}
