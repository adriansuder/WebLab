import { Component, OnInit } from '@angular/core';
import { Film } from './film.model';
import { FilmService } from './film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  filmList: Film[];

  constructor(private filmService: FilmService) {
  }
  ngOnInit(): void {
    this.filmService.getFilmsFromLocalStorage();
    this.filmList = this.filmService.getFilms();
  }

}
