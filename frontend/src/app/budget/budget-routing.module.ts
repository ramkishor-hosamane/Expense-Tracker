import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetViewComponent } from './budget-view/budget-view.component';
import { BudgetUpdateComponent } from './budget-update/budget-update.component';

const routes: Routes = [

  { path: '', component: BudgetViewComponent },
  { path: ':budgetId', component: BudgetUpdateComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
