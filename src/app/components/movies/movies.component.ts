import {Component, Input, OnInit} from '@angular/core';
import {MoviesService} from "../../servises/movies.service";
import {IMovie} from "../../interfaces/movie.interface";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movies: IMovie[] = [];
  // @ts-ignore
  public isListView: booleanff = !JSON.parse(localStorage.getItem("isCardView"));
  private moviesService: MoviesService;
  public template: string = "";
  @Input() public search: string = "";
  @Input() public sort: string = "";

  constructor() {
    this.moviesService = new MoviesService();
  }

  ngOnInit(): void {
    this.getMovies();
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
