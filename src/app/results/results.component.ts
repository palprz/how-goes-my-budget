import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Expense } from '../models/expense';
import { Person } from '../models/person';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  @Input() person!: Person;
  @Input() expense!: Expense;

  constructor() { }

  // ngOnChanges(changes: SimpleChanges): void {
  //   throw new Error('Method not implemented.');
  // }

}
