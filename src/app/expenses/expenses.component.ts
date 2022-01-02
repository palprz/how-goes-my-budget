import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Expense } from '../models/expense';
import { Person } from '../models/person';
import { v4 as uuidv4 } from 'uuid';

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

  deleteExpense(expense: Expense) {
    const index = this.expenses.indexOf(expense, 0);
    if (index > -1) {
      this.expenses.splice(index, 1);
    }
  }

  assignPerson(expense: Expense, person: Person, event: any) {
    if (event.currentTarget.checked) {
      // add person
      expense.forWhom.push(person);
    } else {
      // remove person
      const index = expense.forWhom.indexOf(person, 0);
      if (index > -1) {
        expense.forWhom.splice(index, 1);
      }
    }
  }
  
  generateTestData() {
    const person1 = new Person(uuidv4(), 'Adam', 2200);
    const person2 = new Person(uuidv4(), 'Sarah', 2500);

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
