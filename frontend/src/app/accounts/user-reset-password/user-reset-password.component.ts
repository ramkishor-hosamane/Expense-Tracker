import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertService, AlertType } from '../../Services/alert.service';

@Component({
  selector: 'app-user-reset-password',
  templateUrl: './user-reset-password.component.html',
  styleUrls: ['./user-reset-password.component.css']
})
export class UserResetPasswordComponent implements OnInit {
  user = {'new_password':'','confirm_password':''}
  token:any = ''
  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService:AlertService) { }

  ngOnInit(): void {

  }
  resetPassword() {
    this.token = this.route.snapshot.queryParamMap.get('token');

    this.userService.resetPassword(this.user,this.token).subscribe({
      next: (response) => {

        console.log('Password reset successfully:', response);
        this.alertService.addAlert({ message: response.message, type: AlertType.Success })
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Registration error:', error);
      }
    });
  }
}
