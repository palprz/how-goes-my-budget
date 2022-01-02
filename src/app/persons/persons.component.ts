import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent {

  persons: Person[] = [];

  constructor(private dataService: DataService) {
    this.persons = dataService.getPersons();
  }
  
}
