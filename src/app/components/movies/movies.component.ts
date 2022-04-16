import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../servises/movies.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movies: any[] = [];
  // @ts-ignore
  public isListView: booleanff = !JSON.parse(localStorage.getItem("isCardView"));
  private moviesService: MoviesService;
  public template: string = "";

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

}
