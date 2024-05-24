import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  user = { username: '', password: '' ,email:''};
  like = 0
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {}
    increment(){
      this.like++;
    }
    registerUser() {
      this.userService.registerUser(this.user).subscribe({
        next: (response) => {
          console.log('User registered successfully:', response);
          // Optionally navigate to another page after registration
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Registration error:', error);
        }
      });
    }
}
