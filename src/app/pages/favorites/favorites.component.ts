import { Component} from '@angular/core';
import {MoviesService} from "../../servises/movies.service";
import {IMovie} from "../../interfaces/movie.interface";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html'
})
export class FavoritesComponent {

  public movies: IMovie[] = [];

  constructor(private moviesService: MoviesService) {
    this.getMovies();
  }

  getMovies(): void {
   this.moviesService.getFavoritesMovies()
     .subscribe({
       next: (res:IMovie[]) => {
         this.movies = res;
       },
       error: (error) => {
         console.log(error)
       }
     });
  }

}
