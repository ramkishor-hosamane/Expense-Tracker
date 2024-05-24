import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  is_user_authenticated = false
  user = {'username':'ram','email':'ramhosamane@gmail.com'}
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.is_user_authenticated =  this.authService.isAuthenticated();

  }

}
