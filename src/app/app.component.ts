import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Expense } from './models/expense';
import { Person } from './models/person';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private dataService: DataService) {}

  calculation() {
    this.dataService.sendRequestToCalculate();
  }

  generateTestData() {
    this.dataService.addPerson(new Person(uuidv4(), 'Adam', 2800));
    this.dataService.addPerson(new Person(uuidv4(), 'Sarah', 1600));

    this.dataService.addExpense(new Expense('Rent', 1500));
    this.dataService.addExpense(new Expense('Food', 700));
    this.dataService.addExpense(new Expense('Electricity', 150));
    this.dataService.addExpense(new Expense('City council', 220));
    this.dataService.addExpense(new Expense('Internet', 35));
    this.dataService.addExpense(new Expense('Art class', 120));
    this.dataService.addExpense(new Expense('Phone', 60));
  }
}
