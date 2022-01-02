import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Expense } from '../models/expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent {

  expenses: Expense[] = [];

  constructor(private dataService: DataService) {
    this.expenses = dataService.getExpenses();
  }
  
}
