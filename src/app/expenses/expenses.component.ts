import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Expense } from '../models/expense';
import { Person } from '../models/person';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent {

  expenses: Expense[] = [];
  persons: Person[] = [];

  constructor(private dataService: DataService) {
    this.expenses = dataService.getExpenses();
    this.persons = dataService.getPersons();
  }
  
  generateTestData() {
    const person1 = new Person('Adam', 2200);
    const person2 = new Person('Sarah', 2500);

    this.persons.push(person1);
    this.persons.push(person2);

    const expense1 = new Expense('Rent', 950);
    const expense2 = new Expense('Food', 450);
    const expense3 = new Expense('Electricity', 150);

    this.expenses.push(expense1);
    this.expenses.push(expense2);
    this.expenses.push(expense3);
  }

}
