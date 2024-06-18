import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './accounts/user-registration/user-registration.component';
import { UserLoginComponent } from './accounts/user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { UserResetPasswordComponent } from './accounts/user-reset-password/user-reset-password.component';
import { UserForgotPasswordComponent } from './accounts/user-forgot-password/user-forgot-password.component';
import { AnalyticsViewComponent } from './analytics/analytics-view/analytics-view.component';

const routes: Routes = [
  { path: 'register', component: UserRegistrationComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'reset-password', component: UserResetPasswordComponent },
  { path: 'forgot-password', component: UserForgotPasswordComponent },
  
  { path: 'budgets', loadChildren: () => import('./budget/budget.module').then(m => m.BudgetModule) },
  { path: 'expenses', loadChildren: () => import('./expense/expense.module').then(m => m.ExpenseModule) },
  { path: 'incomes', loadChildren: () => import('./income/income.module').then(m => m.IncomeModule) },
 { path: 'analytics', loadChildren: () => import('./analytics/analytics.module').then(m => m.AnalyticsModule) },
  //{ path: 'analytics', loadChildren: () => import('./income/income.module').then(m => m.IncomeModulAnalyticsModulee) },
  //{ path: 'analytics', component: AnalyticsViewComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
