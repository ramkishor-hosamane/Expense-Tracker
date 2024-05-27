// shared.service.ts
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  sidebarToggle = new EventEmitter<void>();
  burgerSidebarToggle = new EventEmitter<void>();

  emitSidebarToggle() {
    this.sidebarToggle.emit();
  }

  emitBurgerSidebarToggle(){
    this.burgerSidebarToggle.emit();

  }
}
