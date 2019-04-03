import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {

  apiKey = '8151839c5356222aa0cce895161d813b';
  theMovieDBURL = 'https://api.themoviedb.org/3/';

  constructor(private http: HttpClient) { }

  searchMovie(searchTxt: string): Observable<any> {
    const url = this.theMovieDBURL
      + 'search/movie'
      + '?api_key=' + this.apiKey
      + '&query=' + searchTxt;

    return this.http.get(url);
  }
}
