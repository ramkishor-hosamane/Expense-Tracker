import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CategoryExpensesComponent } from './category-expenses/category-expenses.component';
import { BudgetVsExpensesComponent } from './budget-vs-expenses/budget-vs-expenses.component';
import { AnalyticsViewComponent } from './analytics-view/analytics-view.component';
import { AnalyticsRoutingModule } from './analytics-routing.module';
import { NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CategoryExpensesComponent,
    BudgetVsExpensesComponent,
    AnalyticsViewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AnalyticsRoutingModule,
    NgbAccordionModule
  ]
  
})
export class AnalyticsModule { }
