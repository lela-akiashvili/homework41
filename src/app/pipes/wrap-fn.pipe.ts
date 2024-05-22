import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../app.component';
@Pipe({
  name: 'wrapFn',
  standalone: true,
})
export class WrapFnPipe implements PipeTransform {
  transform(value: (key: string) => any[], searchKey: string): any[] {
    const result = value(searchKey);
    console.log(result);
    return result;
  }
}
