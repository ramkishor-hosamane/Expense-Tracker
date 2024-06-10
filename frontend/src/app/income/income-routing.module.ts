import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeViewComponent } from './income-view/income-view.component';
import { IncomeUpdateComponent } from './income-update/income-update.component';

const routes: Routes = [
  { path: '', component: IncomeViewComponent },
  { path: ':incomeId', component: IncomeUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeRoutingModule { }
