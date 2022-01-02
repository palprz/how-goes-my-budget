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

    // each row with result == 1 person
    this.persons.forEach(person => {
      let all = 0;
      let common = 0;
      let individual = 0;
      // check each expense for this person
      this.expenses.forEach( expense => {
        // is expense assigned to this person?
        if (expense.forWhom.find(e => e.id === person.id)) {
          all = all + expense.cost;
          if (expense.forWhom.length === 1) {
            // if it's only one person assigned then it's an individual
            individual = individual + expense.cost;
          }
        }

        // same number of assigned persons as all persons == common expense
        if (expense.forWhom.length === this.persons.length) {
          common = common + expense.cost;
        }
      });

      // TODO properly split that data (all and common)
      const result = new Result(person.id, person.name, all, common, individual, person.salary - all);
      this.results.push(result);
    });
  }

}
