import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Person } from '../models/person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent {

  @Output() newPerson = new EventEmitter<Person>();

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  checkoutForm = this.formBuilder.group({
    name: '',
    salary: ''
  });

  onSubmit(): void {
    const value = this.checkoutForm.value;
    const person = new Person(value.name, value.salary);
    this.newPerson.emit(person);
    this.checkoutForm.reset();
  }
}
