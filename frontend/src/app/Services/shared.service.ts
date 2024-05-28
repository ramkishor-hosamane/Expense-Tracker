// shared.service.ts
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  sidebarToggle = new EventEmitter<void>();
  burgerSidebarToggle = new EventEmitter<void>();
  navbarRefresh = new EventEmitter<void>();
  homeRefresh = new EventEmitter<void>();
  topbarRefresh = new EventEmitter<void>();

  emitSidebarToggle() {
    this.sidebarToggle.emit();
  }

  emitBurgerSidebarToggle(){
    this.burgerSidebarToggle.emit();

  }
  emitNavbarRefresh(){
    this.navbarRefresh.emit();

  }
  emitHomeRefresh(){
    this.homeRefresh.emit();

  }
  emitTopbarRefresh(){
    this.topbarRefresh.emit();

  }
}
