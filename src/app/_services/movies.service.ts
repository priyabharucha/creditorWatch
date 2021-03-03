import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../_models/movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  searchMovies():Observable<Movie[]> {
    return this.httpClient.get<any>("https://www.omdbapi.com/?s=star_wars&apikey=361f5fed").pipe(map(result=>result.Search));
  }

  searchMoviesAfter2000():any {
    return this.httpClient.get<any>("https://www.omdbapi.com/?y=2000&apikey=361f5fed").pipe(map(result=>result.Search));
  }

}
