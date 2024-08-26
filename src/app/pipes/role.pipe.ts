import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(value: string): any {
    switch (value) {
      case 'USER':
        return "Utilisateur";

      case 'ADMIN':
      return "Administrateur";

      case 'SUPER_ADMIN':
      return "Super Administrateur";

      default:
        break;
    }
  }

}
