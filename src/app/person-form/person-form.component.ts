import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent {

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {}

  checkoutForm = this.formBuilder.group({
    name: '',
    salary: ''
  });

  onSubmit(): void {
    const value = this.checkoutForm.value;
    const person = new Person(value.name, value.salary);
    this.dataService.addPerson(person);
    this.checkoutForm.reset();
  }
}
