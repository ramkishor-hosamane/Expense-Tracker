import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private apiUrl = 'http://127.0.0.1:8000/api/analytics';

  constructor(private http: HttpClient,private authService:AuthService,private settings:SettingsService) {
    this.apiUrl = `${this.settings.getApiUrl()}/analytics`;}

  

  getExpenseAnalytics(): Observable<any[]> {
   
    
  
    return this.http.get<any[]>(`${this.apiUrl}/expense_analytics`);
  }
  

  getExpenseDistribution(): Observable<any[]> {
   
    
  
    return this.http.get<any[]>(`${this.apiUrl}/expense_distribution`);
  }
  
  getCategoryExpenseBreakdown(): Observable<any[]> {
   
    
  
    return this.http.get<any[]>(`${this.apiUrl}/category-expense-breakdown`);
  }

  getBudgetVsExpenseHistogram(): Observable<any[]> {
   
    
  
    return this.http.get<any[]>(`${this.apiUrl}/budget-vs-expense-histogram`);
  }


  getExpenseTrends(start_date:any =null,end_date:any =null): Observable<any[]> {
    
    
    ;
    let api_url  =`${this.apiUrl}/expense_trend_over_time`;
    if(start_date && end_date){
      api_url+=`?start_date=${start_date}&end_date=${end_date}`
    }
    return this.http.get<any[]>(api_url);
  }
  
  
}
