import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FusionChartsModule } from 'angular-fusioncharts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PersonsComponent } from './persons/persons.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ResultsComponent } from './results/results.component';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonFormComponent,
    ExpensesComponent,
    ExpenseFormComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FusionChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
