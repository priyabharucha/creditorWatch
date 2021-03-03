import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Movie } from '../_models/movie';
import { MoviesService } from '../_services/movies.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private moviesService:MoviesService) { 

  }

  ngOnInit(): void {
  }

  searchStarWar() {
    console.log('searchStarwars')
    this.moviesService.searchMovies().subscribe(result=>{
      this.movies = result;
    })
  }

  searchReleasesAfter2000() {
    
    this.moviesService.searchMoviesAfter2000().subscribe((result:any)=>{
      this.movies = result;
    })
  }

  searchEpisodes() {
    console.log('searchEpisodes')
  }
}
