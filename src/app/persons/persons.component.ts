import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent {
  persons: Person[] = [];

  constructor(private dataService: DataService) {
    this.persons = dataService.getPersons();
  }

  deletePerson(person: Person) {
    const index = this.persons.indexOf(person, 0);
    if (index > -1) {
      this.persons.splice(index, 1);
    }
  }
}
