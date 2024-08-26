import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string): any {
    return value == 'M' ? 'Masculin' : 'Féminin';
  }

}
