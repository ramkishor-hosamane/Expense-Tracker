import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetVsExpensesComponent } from './budget-vs-expenses.component';

describe('BudgetVsExpensesComponent', () => {
  let component: BudgetVsExpensesComponent;
  let fixture: ComponentFixture<BudgetVsExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BudgetVsExpensesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BudgetVsExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
