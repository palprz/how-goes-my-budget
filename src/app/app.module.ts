import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { PersonsComponent } from './persons/persons.component';
import { ResultsComponent } from './results/results.component';
import { ChartsComponent } from './charts/charts.component';
import { CalculationsComponent } from './calculations/calculations.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent,
    ExpenseFormComponent,
    ExpensesComponent,
    PersonsComponent,
    ResultsComponent,
    ChartsComponent,
    CalculationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
