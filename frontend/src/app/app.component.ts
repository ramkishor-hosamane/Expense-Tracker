import { Component } from '@angular/core';
import { SharedService } from './Services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  is_full_main_content:boolean = false;
  private subscription: any;
  constructor(private sharedService:SharedService){}
  ngOnInit(): void {
    this.subscription = this.sharedService.sidebarToggle.subscribe(() => {
      this.is_full_main_content = !this.is_full_main_content;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
