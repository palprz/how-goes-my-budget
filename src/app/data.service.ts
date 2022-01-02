import { Injectable } from '@angular/core';
import { Expense } from './models/expense';
import { Person } from './models/person';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  persons: Person[] = [];
  expenses: Expense[] = [];

  addPerson(newPerson: Person) {
    this.persons.push(newPerson);
  }

  getPersons() {
    return this.persons;
  }

  addExpense(newExpense: Expense) {
    this.expenses.push(newExpense);
  }

  getExpenses() {
    return this.expenses;
  }
}
