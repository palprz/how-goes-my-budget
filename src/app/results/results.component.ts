import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Expense } from '../models/expense';
import { Person } from '../models/person';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  persons: Person[] = [];
  expenses: Expense[] = [];

  constructor(dataService: DataService) {
    this.persons = dataService.getPersons();
    this.expenses = dataService.getExpenses();
  }

  recalculate(): void {
    // TODO
  }

}
