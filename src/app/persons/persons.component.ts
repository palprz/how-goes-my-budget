import { Component, EventEmitter, Output } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent {

  @Output() newPerson = new EventEmitter<Person>();
  
  constructor() { }

  persons: Person[] = [];

  receiveNewPerson(person: Person) {
    this.persons.push(person);
    this.newPerson.emit(person);
  }

}
