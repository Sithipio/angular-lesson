import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], sortKey: string): any {
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
