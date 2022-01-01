import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Expense } from '../models/expense';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent {

  @Output() newExpense = new EventEmitter<Expense>();

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  checkoutForm = this.formBuilder.group({
    name: '',
    cost: ''
  });

  onSubmit(): void {
    const value = this.checkoutForm.value;
    const expense = new Expense(value.name, value.cost);
    this.newExpense.emit(expense);
    this.checkoutForm.reset();
  }
}
