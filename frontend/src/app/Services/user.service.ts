import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:8000/api/accounts/';

  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}signup/`, user);
  }

  loginUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}login/`, user);
  }
  forgotPassword(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}forgot-password/`, user);
  }
  resetPassword(user: any,token:any): Observable<any> {
    return this.http.post(`${this.apiUrl}reset-password/${token}`, user);
  }
  

}
