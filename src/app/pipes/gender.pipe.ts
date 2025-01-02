import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
  standalone: false
})
export class GenderPipe implements PipeTransform {
  transform(value: string): string {
    switch (value.toLowerCase()) {
      case 'male':
        return 'Mr.';
      case 'female':
        return 'Ms.';
      default:
        return value;
    }
  }
}