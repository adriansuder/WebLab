import { FilmService } from './film.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  filmList: Film[];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.getFilmsFromLocalStorage();
    this.filmList = this.filmService.getFilms();
  }


}
