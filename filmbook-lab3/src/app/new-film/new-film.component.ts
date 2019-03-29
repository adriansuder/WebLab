import { FilmService } from './../film.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-film',
  templateUrl: './new-film.component.html',
  styleUrls: ['./new-film.component.scss']
})
export class NewFilmComponent implements OnInit {
  nowyFilm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private filmService: FilmService) { }

  ngOnInit() {
    this.nowyFilm = this.fb.group({
      title: ['', Validators.required],
      poster: [''],
      actors: this.fb.array([]),
      year: ['', Validators.required],
      director: [''],
      genre: this.fb.array([])
    });
  }
  onBtnSubmitClick() {
    console.log(this.nowyFilm);
    const film: Film = {
      id: (Math.random() * 100000).toFixed(),
      ...this.nowyFilm.value
    };
    this.filmService.addFilm(film);
  }

}
