import { Component, Input } from '@angular/core';
import { Expense } from './models/expense';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  newPerson!: Person;
  newExpense!: Expense;

  constructor() { }

  receiveNewPerson(person: Person) {
    this.newPerson = person;
  }

  receiveNewExpense(expense: Expense) {
    this.newExpense = expense;
  }
}
