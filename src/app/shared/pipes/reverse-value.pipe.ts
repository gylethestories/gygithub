import { PipeTransform } from '@angular/core';

export class ReverseValuePipe implements PipeTransform {
  transform(value: string, ...args: any[]) {
    return value
      .split('')
      .reverse()
      .join('');
  }
}
