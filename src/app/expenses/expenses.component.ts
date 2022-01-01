import { Component, EventEmitter, Output } from '@angular/core';
import { Expense } from '../models/expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent {

  @Output() newExpense = new EventEmitter<Expense>();

  constructor() { }

  expenses: Expense[] = [];

  receiveNewExpense(expense: Expense) {
    this.expenses.push(expense);
    this.newExpense.emit(expense);
  }
}
