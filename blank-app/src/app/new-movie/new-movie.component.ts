import { MovieService } from './../movie.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})
export class NewMovieComponent implements OnInit {

  newMovie: FormGroup;
  constructor(private fb: FormBuilder, private movieService: MovieService) { }

  ngOnInit() {
    this.newMovie = this.fb.group({
      title: ['', Validators.required],
      overview: [''],
      poster_path: [''],
      director: [''],
      rating: [''],
      year: ['']
    });
  }

  onNewMovieClick(){
    if(this.newMovie.valid){
      this.movieService.addFilm(this.newMovie.value);
    }
  }

}
