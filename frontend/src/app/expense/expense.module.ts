import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseViewComponent } from './expense-view/expense-view.component';
import { ExpenseUpdateComponent } from './expense-update/expense-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpenseRoutingModule } from './expense.routing-module';
import { NgbPagination, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../Services/auth-interceptor.service';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseImportFormComponent } from './expense-import-form/expense-import-form.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ExpenseViewComponent,ExpenseUpdateComponent, ExpenseFormComponent, ExpenseImportFormComponent
  ],
  // providers:[
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: AuthInterceptor,
  //     multi: true,
  //   },
  // ],
  imports: [
    CommonModule,
    FormsModule,
    ExpenseRoutingModule,
    NgbPagination,
    NgbPaginationModule,
    ReactiveFormsModule,
    SharedModule

  ]
})
export class ExpenseModule { }
