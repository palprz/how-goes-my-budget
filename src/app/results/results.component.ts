import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Expense } from '../models/expense';
import { Person } from '../models/person';
import { Result } from '../models/result';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {
  persons: Person[] = [];
  expenses: Expense[] = [];
  results: Result[] = [];
  errorMsg: string = '';

  summaryChart!: Object;
  breakDownExpensesChart!: Object;

  constructor(dataService: DataService) {
    this.persons = dataService.getPersons();
    this.expenses = dataService.getExpenses();
    // check if calculation button has been clicked
    dataService.getCalculationEvent().subscribe(() => {
      this.calculation();
    });
  }

  calculation(): void {
    // clear results
    this.results = [];

    if (!this.validation()) {
      return;
    }

    // each row with result == 1 person
    this.persons.forEach((person) => {
      let total = 0;
      let common = 0;
      let individual = 0;
      let expenseMap = new Map<string, number>();
      // check each expense for this person
      this.expenses.forEach((expense) => {
        let expenseCostPerPerson = Math.round(
          expense.cost / expense.forWhom.length
        );

        // is expense assigned to this person?
        if (expense.forWhom.find((e) => e.id === person.id)) {
          expenseMap.set(expense.name, expenseCostPerPerson);
          total = total + expenseCostPerPerson;
          if (expense.forWhom.length === 1) {
            // if it's only one person assigned then it's an individual
            individual = individual + expenseCostPerPerson;
          } else if (expense.forWhom.length === this.persons.length) {
            // same number of assigned persons as all persons == common expense
            common = common + expenseCostPerPerson;
          }
        } else {
          expenseMap.set(expense.name, 0);
        }
      });

      const result = new Result(
        person.id,
        person.name,
        total,
        common,
        individual,
        person.salary - total,
        expenseMap
      );
      this.results.push(result);
    });

    this.defineSummaryChart();
    this.defineBreakDownExpensesChart();
  }

  defineSummaryChart() {
    let data: any[] = [];
    this.results.forEach((result) => {
      data.push({ label: result.personName, value: result.totalExpense });
    });

    this.summaryChart = {
      chart: {
        caption: 'Total expense per person',
        xAxisName: 'Person name',
        yAxisName: 'Cost',
        theme: 'fusion',
      },
      data: data,
    };
  }

  defineBreakDownExpensesChart() {
    // find expense names
    let expenseNamesList: any[] = [];
    this.expenses.forEach((expense) => {
      expenseNamesList.push({ label: expense.name });
    });

    // find data for person and per all expenses related to that person
    let dataSet: any[] = [];
    this.results.forEach((result) => {
      let data: any[] = [];
      result.expenseMap.forEach((value: number) => {
        data.push({ value: value });
      });
      dataSet.push({ seriesname: result.personName, data: data });
    });

    this.breakDownExpensesChart = {
      chart: {
        caption: 'Split expenses',
        theme: 'fusion',
      },
      categories: [
        {
          category: expenseNamesList,
        },
      ],
      dataset: dataSet,
    };
  }

  validation(): boolean {
    this.errorMsg = '';
    // do we have even a single expense to calculate?
    const hasExpenses = this.expenses.length > 0;
    if (!hasExpenses) {
      this.errorMsg = 'Add some expenses to be able to calculate anything';
      return false;
    }

    // has anyone veen assigned to the expense(s)?
    let isAssignedAnyone = false;
    this.expenses.forEach((expense) => {
      if (expense.forWhom.length > 0) {
        isAssignedAnyone = true;
      }
    });

    if (!isAssignedAnyone) {
      this.errorMsg =
        'No one has been assigned to expense - nothing to calculate';
      return false;
    }

    return true;
  }
}
