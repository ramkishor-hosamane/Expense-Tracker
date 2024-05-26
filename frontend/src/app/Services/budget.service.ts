import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
 
  private apiUrl = 'http://127.0.0.1:8000/api/budgets';
  
  constructor(private http: HttpClient,private authService:AuthService,private settings:SettingsService) {
    this.apiUrl = `${this.settings.getApiUrl()}/budgets`;
  }

  createBudget(budget: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/`, budget);
  }

  getBudgets(): Observable<any[]> {
   
  
    return this.http.get<any[]>(`${this.apiUrl}/`);
  }
  
  getBudgetByID(budgetId:any): Observable<any[]> {
   
  
    return this.http.get<any[]>(`${this.apiUrl}/${budgetId}`);
  }
  
  updateBudget(budget: any): Observable<any[]> {
   const budgetId = budget.id
  
    return this.http.put<any[]>(`${this.apiUrl}/${budgetId}/`,budget);
  }
  
  deleteBudget(budgetId:any): Observable<any[]> {
   
    return this.http.delete<any[]>(`${this.apiUrl}/${budgetId}/`);
  }

  
  

}
