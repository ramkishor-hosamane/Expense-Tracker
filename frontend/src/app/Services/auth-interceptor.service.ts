import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
 // Exclude certain URLs from interception
 if (
    req.url.includes('/login') || // Adjust this condition as per your login URL
    req.url.includes('/register') // Adjust this condition as per your signup URL
  ) {
    return next.handle(req); // Skip interception
  }

    // Get the authentication token    
    const authToken = this.authService.getAuthToken();

    // Clone the request and add the authorization header
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Token ${authToken}`,
      },
    });
    
    // Pass the cloned request instead of the original request to the next handler
    return next.handle(authReq);
  }
}
