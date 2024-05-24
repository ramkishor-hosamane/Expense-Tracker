import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseViewComponent } from './expense-view/expense-view.component';
import { ExpenseUpdateComponent } from './expense-update/expense-update.component';

const routes: Routes = [
  { path: '', component: ExpenseViewComponent },
  { path: ':expenseId', component: ExpenseUpdateComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }
