import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrapFn',
  standalone: true,
})
export class WrapFnPipe implements PipeTransform {
  transform(value: (key: string) => any[], search: string): any[] {
    const array = value(search);
    return array;
  }
}
