import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Expense } from '../models/expense';
import { Person } from '../models/person';
import { Result } from '../models/result';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  persons: Person[] = [];
  expenses: Expense[] = [];
  results: Result[] = [];


  constructor(dataService: DataService) {
    this.persons = dataService.getPersons();
    this.expenses = dataService.getExpenses();
  }

  recalculate(): void {
    // clear results
    this.results = [];

    this.persons.forEach(person => {
      let all = 0;
      this.expenses.forEach( expense => {
        if (expense.forWhom.find(e => e.id === person.id)) {
          all = all + expense.cost;
        }
      });

      // TODO rest data
      const result = new Result(person.id, person.name, all, 123, 123, 133);
      this.results.push(result);
    });
  }

}
