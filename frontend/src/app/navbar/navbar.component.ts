import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  is_user_authenticated = false

  constructor(private authService:AuthService) { }
  ngOnInit(): void {
    this.is_user_authenticated =  this.authService.isAuthenticated();

  }

}
