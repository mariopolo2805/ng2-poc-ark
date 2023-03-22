import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iban'
})
export class IbanPipe implements PipeTransform {

  transform(value: string): string {
    const control = value.substring(0, 2);
    value = value.substring(2).replace(/(.{4})/g, '$1 ').trim();
    // ES 12 1212 - BBVA
    // ES 12 2424 - Santander
    // ...
    if (value.slice(0, 4) === '1212') {
      value = `BBVA: ES${control} ${value}`;
    } else if (value.slice(0, 4) === '2424'){
      value = `Santander: ES${control} ${value}`;
    }

    return value;
  }

}
