import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { Expense } from '../models/expense';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent {

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {}

  checkoutForm = this.formBuilder.group({
    name: '',
    cost: ''
  });

  onSubmit(): void {
    const value = this.checkoutForm.value;
    const expense = new Expense(value.name, value.cost);
    this.dataService.addExpense(expense);
    this.checkoutForm.reset();
  }
}
