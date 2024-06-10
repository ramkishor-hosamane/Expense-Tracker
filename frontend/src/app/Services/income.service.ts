import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

import { map } from 'rxjs/operators';
import { SettingsService } from './settings.service';
@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  private apiUrl = 'http://127.0.0.1:8000/api/incomes';

  constructor(private http: HttpClient,private authService:AuthService,private settings:SettingsService) {
    this.apiUrl = `${this.settings.getApiUrl()}/incomes`;

  }

  createIncome(income: any): Observable<any> {
    
    return this.http.post(`${this.apiUrl}/`, income);
  }

 

  getIncomes(page: number):any{
    console.log("Sending requrest to ",this.apiUrl)
    return this.http.get(`${this.apiUrl}/?page=${page}`);
}





  getIncomeByID(incomeId:any): Observable<any[]> {
   
  
    return this.http.get<any[]>(`${this.apiUrl}/${incomeId}`);
  }
  
  updateIncome(income: any): Observable<any[]> {
   const incomeId = income.id
  
    return this.http.put<any[]>(`${this.apiUrl}/${incomeId}/`,income);
  }
  
  deleteIncome(incomeId:any): Observable<any[]> {
   
  
    return this.http.delete<any[]>(`${this.apiUrl}/${incomeId}/`);
  }
 
 

  ExportIncomes(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/export_incomes/`, {
      responseType: 'blob' // Set response type to Blob to handle file download
    });
  }
}
