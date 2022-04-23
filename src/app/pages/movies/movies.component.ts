import {Component} from '@angular/core';
import {MoviesService} from "../../servises/movies.service";
import {IMovie} from "../../interfaces/movie.interface";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent {

  public movies: IMovie[] = [];

  constructor(private moviesService: MoviesService) {
    this.getMovies();
  }

  getMovies(): void {
    this.moviesService.getMovies()
      .subscribe({
        next: (res) => {
          this.movies = res;
        },
        error: (error) => {
          console.log(error)
        }
      });
  }
}
