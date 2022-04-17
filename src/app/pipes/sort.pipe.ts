import {Pipe, PipeTransform} from '@angular/core';
import {IMovie} from "../interfaces/movie.interface";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], sortKey: string): IMovie[] {
    let stringArray = [];

    if (!sortKey) {
      return value;
    } else {
      stringArray = value.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return -1;
        else if (a[sortKey] > b[sortKey]) return 1;
        else return 0;
      });
    }

    return stringArray;
  }
}
