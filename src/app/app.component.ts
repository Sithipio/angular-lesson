import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NewMovieComponent} from "./components/new-movie/new-movie.component";
import {IMovie} from "./interfaces/movie.interface";
import {MoviesService} from "./servises/movies.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // @ts-ignore
  public isDarkMode: any = JSON.parse(localStorage.getItem("isDarkMode"));
  public isNavbarCollapsed: boolean = true;
  public search: string = "";
  public sort: string = "";
  public movies: IMovie[] = [];

  constructor(private modalService: NgbModal,
              private moviesService: MoviesService) {

  }

  ngOnInit(): void {
    this.getMovies();
    if (this.isDarkMode) {
      document.body.classList.toggle("dark-mode");
    }
  }

  getMovies(): void {
    this.movies = this.moviesService.getMovies();
  }

  addMovie(movie: any): void {
    this.moviesService.addMovie(movie);
    this.getMovies();
  }

  changeMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem("isDarkMode", JSON.stringify(this.isDarkMode));
    document.body.classList.toggle("dark-mode");
  }

  onSearch(event: any): void {
    this.search = event.target.value;
  }

  onSort(event: any): void {
    this.sort = event.target.value;
  }

  onOpen() {
    const modalRef = this.modalService.open(NewMovieComponent);
    modalRef.componentInstance.isDarkMode = this.isDarkMode;

    modalRef.componentInstance.passEntry.subscribe((movie: any) => {
      console.log(movie);
      this.addMovie(movie);
    })
  }

}
