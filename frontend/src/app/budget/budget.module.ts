import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetViewComponent } from './budget-view/budget-view.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { FormsModule } from '@angular/forms';
import { BudgetUpdateComponent } from './budget-update/budget-update.component';


@NgModule({
  declarations: [
    BudgetViewComponent,
    BudgetFormComponent,
    BudgetUpdateComponent
  ],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    FormsModule
  ]
})
export class BudgetModule { }
