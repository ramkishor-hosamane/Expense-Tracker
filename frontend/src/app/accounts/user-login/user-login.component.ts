import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { AuthService } from '../../Services/auth.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user = { username: '', password: '' };
  loginError = ''
  constructor(private userService: UserService,private authService:AuthService, private router: Router) {}

 
  loginUser() {
    this.loginError = ''; // Reset login error
    this.userService.loginUser(this.user).subscribe(
      (response: any) => {
        console.log('User logged in successfully:', response);
  
        // Assuming your response has a property 'token' containing the authentication token
        const authToken = response.token;
  
        // Store the token in a secure way, you can use localStorage or a service for this
        this.authService.setAuthToken(authToken);
  
        // Optionally, you can navigate to another page after successful login
        this.router.navigate(['/expenses']);
      },
      error => {
        console.error('Login error:', error);
        this.loginError = 'Invalid username or password '; // Set login error message
      }
    );
  }
  
    


}
