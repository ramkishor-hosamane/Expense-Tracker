import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseImportFormComponent } from './expense-import-form.component';

describe('ExpenseImportFormComponent', () => {
  let component: ExpenseImportFormComponent;
  let fixture: ComponentFixture<ExpenseImportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpenseImportFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpenseImportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
