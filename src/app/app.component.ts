import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WrapFnPipe } from './pipes/wrap-fn.pipe';
export interface Person {
  firstName: string;
  lastName: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, WrapFnPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  filterPeopleKey = '';
  filterFruitsKey = '';
  people: Person[] = [
    { firstName: 'William', lastName: 'James' },
    { firstName: 'Henry', lastName: 'James' },
    { firstName: 'Gordon', lastName: 'Allport' },
    { firstName: 'Sigmund', lastName: 'Freud' },
  ];
  fruits = ['apple', 'banana', 'peach', 'plum', 'orange'];

  /*
ორი ვერსიით შევძელი ამოხსნა მაგრამ, რამდენად პასუხობს რომელიმე თვითონ დავალებას ზუსტად არ ვიცი,რადგან ორივე შემთხვევში მიწევს რომ app.component.ts-ში ცვლილებები შევიტანო. პირველ შემთხვევაში ფუნქციებს arrow function-ებად ვაქცევ და შემდეგ ვიყენებ wrapFn-ს:

filterPeopleFn = (key: string): Person[] =>{
  return this.people.filter(
    (person) =>
      person.firstName.includes(key) || person.lastName.includes(key)
  );
}
filterFruitsFn = (key: string) =>{
  return this.fruits.filter((fruit) => fruit.includes(key));
}
 მეორე ვერსია ესაა, bind-ის გამოყენებით. მაგრამ, გამომდინარე იქიდან, რომ საწყის ts-ში შემქავს ცვლილებები და მხოლოდ wrapFn-ის მანიპულირებით ვერ ვაკეთებ, არ ვარ დარწმუნებული რომ სწორი გზით ვხსნი ამოცანას.
*/

  constructor() {
    this.filterPeopleFn = this.filterPeopleFn.bind(this);
    this.filterFruitsFn = this.filterFruitsFn.bind(this);
  }

  filterPeopleFn(key: string): Person[] {
    return this.people.filter(
      (person) =>
        person.firstName.includes(key) || person.lastName.includes(key)
    );
  }
  filterFruitsFn(key: string) {
    return this.fruits.filter((fruit) => fruit.includes(key));
  }
}
