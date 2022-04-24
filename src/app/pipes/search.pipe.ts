import {Pipe, PipeTransform} from '@angular/core';
import {IMovie} from "../interfaces/movie.interface";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: IMovie[], args: string): IMovie[] {
    if (!value) return [];
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter(function (data: IMovie) {
      return data.title.toLowerCase().includes(args);
    });
  }
}
