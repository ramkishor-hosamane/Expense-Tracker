import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:8000/api/accounts/';

  constructor(private http: HttpClient,private settings:SettingsService) {
    this.apiUrl = `${this.settings.getApiUrl()}/accounts`;
    

  }

  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup/`, user);
  }
  getCurrentUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/my-account/`);
  }
  loginUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/`, user);
  }

  logoutUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/logout/`);
  }
  forgotPassword(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgot-password/`, user);
  }
  resetPassword(user: any,token:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset-password/${token}`, user);
  }
  

}
