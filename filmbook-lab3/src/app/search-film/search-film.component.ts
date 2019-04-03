import { ThemoviedbService } from './../themoviedb.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.sass']
})
export class SearchFilmComponent implements OnInit {

  movieList: any[] = [];
  movieList$ = new Observable<any>();
  constructor(private themoviedb: ThemoviedbService) { }

  ngOnInit() {}

  szukajFilmu(data) {
    this.movieList$ = this.themoviedb.searchMovie(data.target.value);
    // zamiast poniższego używamy w szablonie pipe async
    // movies.subscribe( (ret: any) => {
    //   console.log(ret);
    //   this.movieList = ret.results;
    // });

  }

}
