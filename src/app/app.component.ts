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

filterPeopleFn = (key: string): Person[] =>{
    return this.people.filter(
      (person) =>
        person.firstName.includes(key) || person.lastName.includes(key)
    );
  }
  filterFruitsFn = (key: string) =>{
    return this.fruits.filter((fruit) => fruit.includes(key));
  }
}
