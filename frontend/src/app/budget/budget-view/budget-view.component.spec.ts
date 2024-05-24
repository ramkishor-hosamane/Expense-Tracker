import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetViewComponent } from './budget-view.component';

describe('BudgetViewComponent', () => {
  let component: BudgetViewComponent;
  let fixture: ComponentFixture<BudgetViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BudgetViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BudgetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
