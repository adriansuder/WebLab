import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
      description: [''],
      poster: [''],
      rating: ['', Validators.required]
    });
  }

  onNowyFilmClick() {
    console.log(this.newFilm);
    const randomId = (Math.random() * 10000000).toFixed();
    const film = {
      id: randomId,
      ...this.newFilm.value
    };

    this.filmService.addFilm(film);
  }

}
