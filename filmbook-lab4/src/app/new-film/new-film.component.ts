import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-new-film',
  templateUrl: './new-film.component.html',
  styleUrls: ['./new-film.component.scss']
})
export class NewFilmComponent implements OnInit {
  newFilm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private filmService: FilmService) { }

  ngOnInit() {
    this.newFilm = this.fb.group({
      title: ['', Validators.required],
      poster: [''],
      year: ['', Validators.required],
      director: ['']
    });
  }

  onBtnNewFilmClick() {
    console.log(this.newFilm);
    const film = {
      id: (Math.random()*100000).toFixed(),
      ...this.newFilm.value
    }
    this.filmService.addFilm(film);
  }

}
