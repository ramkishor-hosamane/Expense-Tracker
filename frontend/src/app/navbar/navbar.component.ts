import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { SharedService } from '../Services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMiniSidebar: boolean = false;
  isActiveSidebar:boolean = false;
  private isMiniSidebarSubscription: Subscription= new Subscription();
  private isActiveSidebarsubscription: Subscription= new Subscription();
  private navbarRefreshSubscription: Subscription= new Subscription();

  is_user_authenticated = false

  constructor(private authService:AuthService,private sharedService:SharedService) { }
  ngOnInit(): void {
    this.isMiniSidebarSubscription = this.sharedService.sidebarToggle.subscribe(() => {
      this.isMiniSidebar = !this.isMiniSidebar;
    });
    this.isActiveSidebarsubscription = this.sharedService.burgerSidebarToggle.subscribe(() => {
      this.isActiveSidebar = !this.isActiveSidebar;
    });
    this.navbarRefreshSubscription = this.sharedService.navbarRefresh.subscribe(() => {
      this.refreshPage();
 
    });

    this.refreshPage();
  }
  ngOnDestroy() {
    this.isMiniSidebarSubscription.unsubscribe();
    this.isActiveSidebarsubscription.unsubscribe();
    this.navbarRefreshSubscription.unsubscribe();

  }

  onBurgerMenuClose(){
    this.isActiveSidebar =false;
  }
  refreshPage(){
    this.is_user_authenticated =  this.authService.isAuthenticated();

  }

}

// sidebar dark_sidebar mini_sidebar
// main_content dashboard_part large_header_bg full_main_content


// sidebar dark_sidebar
// main_content dashboard_part large_header_bg