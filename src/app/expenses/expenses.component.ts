import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Expense } from '../models/expense';
import { Person } from '../models/person';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
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
}
