import { FilmService } from './../film.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Film } from '../film.model';

@Component({
  selector: "app-new-film",
  templateUrl: "./new-film.component.html",
  styleUrls: ["./new-film.component.scss"]
})
export class NewFilmComponent implements OnInit {
  newFilm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private filmService: FilmService) {}

  ngOnInit() {
    this.newFilm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      rating: ['', Validators.required],
      poster: ['']
    });
  }
  onDodajNowyFilmClick() {
    console.log(this.newFilm.value);
    const film: Film = {
      id: (Math.random() * 1000000).toFixed(),
      ...this.newFilm.value
    }
    this.filmService.addFilm(film);
  }
}
