import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Expense } from './models/expense';
import { Person } from './models/person';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() {}

  persons: Person[] = [];
  expenses: Expense[] = [];

  private subject = new Subject<any>();
  
  sendRequestToCalculate() {
    this.subject.next('');
  }

  getCalculationEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }

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
