import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-film',
  templateUrl: './new-film.component.html',
  styleUrls: ['./new-film.component.scss']
})
export class NewFilmComponent implements OnInit {
  // FormControl, FormArray, FormGroup
  newFilm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newFilm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      rating: ['', Validators.required],
      poster: ['']
    });
  }
  onDodajFilmClick() {
    console.log(this.newFilm);
  }

}
