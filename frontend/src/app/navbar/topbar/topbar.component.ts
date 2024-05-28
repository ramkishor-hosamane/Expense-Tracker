import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { SharedService } from '../../Services/shared.service';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  is_user_authenticated = false
  user = {'username':'rams  ','email':'ramhosamawwwne@gmail.com'}
  private refreshTopbarSubscription: Subscription= new Subscription();

  constructor(private authService:AuthService,private sharedService:SharedService,private userService:UserService,private router:Router) { }

  ngOnInit(): void {

    this.refreshTopbarSubscription = this.sharedService.topbarRefresh.subscribe(() => {
this.refreshPage();
    });
    
this.refreshPage();

  }
  ngOnDestroy() {
    this.refreshTopbarSubscription.unsubscribe();

  }


  refreshPage(){

    this.is_user_authenticated =  this.authService.isAuthenticated();
    if (this.is_user_authenticated)
    {
      this.userService.getCurrentUser().subscribe(response => {
        this.user = response;
      });
    }

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
        this.router.navigate(['/home']);
        this.sharedService.emitNavbarRefresh();
        this.sharedService.emitHomeRefresh();
        this.sharedService.emitTopbarRefresh();

      },
      error =>{
        console.log(error)
      }
    )
  }
}
