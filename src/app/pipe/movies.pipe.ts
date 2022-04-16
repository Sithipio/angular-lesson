import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movies'
})
export class MoviesPipe implements PipeTransform {

  transform(number: number): any {

    const rounder = Math.pow(10, 1);
    let key = '';

    const powers = [
      {key: 'B', value: Math.pow(10, 9)},
      {key: 'M', value: Math.pow(10, 6)},
      {key: 'K', value: 1000}
    ];

    for (let i = 0; i < powers.length; i++) {
      let reduced = number / powers[i].value;
      reduced = Math.round(reduced * rounder) / rounder;
      if (reduced >= 1) {
        number = reduced;
        key = powers[i].key;
        break;
      }
    }
    return number + key;
  }

}
