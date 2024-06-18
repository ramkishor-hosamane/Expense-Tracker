import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing-module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './accounts/user-registration/user-registration.component';
import { UserLoginComponent } from './accounts/user-login/user-login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponent } from './navbar/topbar/topbar.component';
import { HomeComponent } from './home/home.component';
import { UserForgotPasswordComponent } from './accounts/user-forgot-password/user-forgot-password.component';
import { UserResetPasswordComponent } from './accounts/user-reset-password/user-reset-password.component';
import { AlertComponent } from './alert/alert.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ExpenseModule } from './expense/expense.module';
import { AuthInterceptor } from './Services/auth-interceptor.service';
import { CommonModule } from '@angular/common';
import { IncomeModule } from './income/income.module';
import { AnalyticsModule } from './analytics/analytics.module';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    NavbarComponent,
    TopbarComponent,
    HomeComponent,
    UserForgotPasswordComponent,
    UserResetPasswordComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgApexchartsModule,
    ExpenseModule,
    IncomeModule,
    AnalyticsModule,
    CommonModule,
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
