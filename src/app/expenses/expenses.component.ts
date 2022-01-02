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
  
}
