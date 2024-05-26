import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Expense, PaginatedExpenseResponse } from '../expense/expense-view/expense.interface';

import { map } from 'rxjs/operators';
import { SettingsService } from './settings.service';
@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private apiUrl = 'http://127.0.0.1:8000/api/expenses';

  constructor(private http: HttpClient,private authService:AuthService,private settings:SettingsService) {
    this.apiUrl = `${this.settings.getApiUrl()}/expenses`;

  }

  createExpense(expense: any): Observable<any> {
    //console.log("Again whats the expense ",expense)
    //const headers = this.getTokenHeaders()
    return this.http.post(`${this.apiUrl}/`, expense);
  }

  // getExpenses(): Observable<any[]> {
   
  //   const headers = this.getTokenHeaders()
  
  //   return this.http.get<any[]>(`${this.apiUrl}/`, { headers });
  // }

  getExpenses(page: number): Observable<PaginatedExpenseResponse> {
    console.log("Sending requrest to ",this.apiUrl)
    return this.http.get<PaginatedExpenseResponse>(`${this.apiUrl}/?page=${page}`);
}





  getExpenseByID(expenseId:any): Observable<any[]> {
   
  
    return this.http.get<any[]>(`${this.apiUrl}/${expenseId}`);
  }
  
  updateExpense(expense: any): Observable<any[]> {
   const expenseId = expense.id
  
    return this.http.put<any[]>(`${this.apiUrl}/${expenseId}/`,expense);
  }
  
  deleteExpense(expenseId:any): Observable<any[]> {
   
  
    return this.http.delete<any[]>(`${this.apiUrl}/${expenseId}/`);
  }
  getCategories(): Observable<any[]> {
   
  
    return this.http.get<any[]>(`${this.apiUrl}/categories`);
  }
  

  // Function to predict category based on description
  predictCategory(description: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/predict_category/`, { description });
  }

 

  ExportExpenses(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/export_expenses/`, {
      responseType: 'blob' // Set response type to Blob to handle file download
    });
  }
}
