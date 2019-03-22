import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-film',
  templateUrl: './new-film.component.html',
  styleUrls: ['./new-film.component.scss']
})
export class NewFilmComponent implements OnInit {

  newFilm: FormGroup;

  constructor(private fb: FormBuilder) { }

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
  }

}
