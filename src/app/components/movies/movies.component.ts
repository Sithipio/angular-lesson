import {Component, Input} from '@angular/core';
import {MoviesService} from "../../servises/movies.service";
import {IMovie} from "../../interfaces/movie.interface";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  // @ts-ignore
  public isListView: boolean = !JSON.parse(localStorage.getItem("isCardView"));
  private moviesService: MoviesService;
  public template: string = "";
  @Input() public search: string = "";
  @Input() public sort: string = "";
  @Input() public movies: IMovie[] = [];

  constructor() {
    this.moviesService = new MoviesService();
  }

  getMovies(): void {
    this.movies = this.moviesService.getMovies();
  }

  changeView(flag: boolean): void {
    this.isListView = flag;
    localStorage.setItem("isCardView", JSON.stringify(!flag));
  }

  onDelete(id: number): void {
    this.moviesService.deleteMovie(id);
    this.getMovies();
  }
}
