import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastSimvol',
})
export class LastSimvolPipe implements PipeTransform {
  transform(value: string, count?: number): string {
    if (count) {
        return value.slice(-count); 
    }
    return value; 
  }
}