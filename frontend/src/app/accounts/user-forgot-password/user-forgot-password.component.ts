import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { AlertService, AlertType } from '../../Services/alert.service';

@Component({
  selector: 'app-user-forgot-password',
  templateUrl: './user-forgot-password.component.html',
  styleUrls: ['./user-forgot-password.component.css']
})
export class UserForgotPasswordComponent implements OnInit {
  user = { email: '' };

  constructor(    private userService: UserService,
    private router: Router,private alertService: AlertService) { }

  ngOnInit(): void {
  }
  forgotPasswordUser() {
    this.userService.forgotPassword(this.user).subscribe({
      next: (response) => {
        console.log('email might have been recieved check:', response);
        this.alertService.addAlert({ message: response.message, type: AlertType.Success });

        // Optionally navigate to another page after registration
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Registration error:', error);
      }
    });
  }
}
