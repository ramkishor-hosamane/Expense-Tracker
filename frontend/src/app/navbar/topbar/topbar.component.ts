import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { SharedService } from '../../Services/shared.service';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  is_user_authenticated = false
  user = {'username':'ram','email':'ramhosamawwwne@gmail.com'}
  constructor(private authService:AuthService,private sharedService:SharedService,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.is_user_authenticated =  this.authService.isAuthenticated();
    this.userService.getCurrentUser().subscribe(response => {
      this.user = response;
    });
  }
  onMenuClick() {
    this.sharedService.emitSidebarToggle();
  }
  onBurgerMenuClick() {
    this.sharedService.emitBurgerSidebarToggle();
  }
  logOut(){
    this.userService.logoutUser().subscribe(
      response => {
        console.log("Logged out ",response)
        this.authService.clearAuthToken();
        this.router.navigate(['/home'])
      },
      error =>{
        console.log(error)
      }
    )
  }
}
