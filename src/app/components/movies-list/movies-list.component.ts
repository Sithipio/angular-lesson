import {Component, Input} from '@angular/core';
import {MoviesService} from "../../servises/movies.service";
import {IMovie} from "../../interfaces/movie.interface";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent {
  // @ts-ignore
  public isListView: boolean = !JSON.parse(localStorage.getItem("isCardView"));
  public template: string = "";
  public search: string = "";
  public sort: string = "";
  @Input() public movies: IMovie[] = [];
  @Input() public title: string = "";

  constructor(private moviesService: MoviesService) {
  }

  changeView(flag: boolean): void {
    this.isListView = flag;
    localStorage.setItem("isCardView", JSON.stringify(!flag));
  }

  onDelete(id: string): void {
    this.moviesService.deleteMovie(id)
      .then(() => {
        console.log('The movies was updated successfully!');
      })
      .catch(err => console.log(err));
  }

  toggleFavorite(movie: IMovie) {
    this.moviesService.toggleFavorite({
      ...movie,
      isFavorite: !movie.isFavorite
    }).then(() => console.log('The movies was updated successfully!'))
      .catch((err: any) => console.log(err));
  }
}
