import { Component, OnInit } from '@angular/core';
import { FilmService } from './film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  filmList: Film[];

  ngOnInit(): void {
    this.filmService.getFilmsFromLocalStorage();
    this.filmList = this.filmService.getFilms();
  }
  constructor(
    private filmService: FilmService
  ) {}


}
