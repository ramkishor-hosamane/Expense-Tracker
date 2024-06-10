import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeRoutingModule } from './income-routing.module';
import { IncomeFormComponent } from './income-form/income-form.component';
import { IncomeUpdateComponent } from './income-update/income-update.component';
import { IncomeViewComponent } from './income-view/income-view.component';
import { FormsModule } from '@angular/forms';
import { NgbPagination, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    IncomeFormComponent,
    IncomeUpdateComponent,
    IncomeViewComponent
  ],
  imports: [
    CommonModule,
    IncomeRoutingModule,
    FormsModule,
    NgbPagination,
    NgbPaginationModule

  ]
})
export class IncomeModule { }
