import { FilmService } from './../film.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.sass']
})
export class FilmDetailComponent implements OnInit {
  film: Film;

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute
  ) { }

  // path: 'file/:id'
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.film = this.filmService.getFilm(id);
  }

}
