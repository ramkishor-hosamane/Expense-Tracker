import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BudgetService } from '../../Services/budget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'budget-form',
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.css'
})
export class BudgetFormComponent {
  predictedCategory:any ;
  @Input() formType:string = "Create";
  @Input() budget = { amount: 0, category: { id: 0, name: '' }};
  @Output() afterBudgetCreateEvent = new EventEmitter<string>();
  @Input() categories: any[] = [];

  constructor(private budgetService: BudgetService,private router:Router) {
  }
 

  



       // Function to create budget
       createBudget() {
        
         console.log("budget is ",this.budget)
         // Call the budget service to create the budget
         this.budgetService.createBudget(this.budget).subscribe(response => {
           console.log('Expense created successfully:', response);
           // Reset budget object with today's date
           this.budget = { amount: 0, category: { id: 0, name: '' }};
           // Reset predicted category
           this.predictedCategory = '';
           // Fetch budgets again after creating the new budget
           this.afterBudgetCreateEvent.emit();
          });
       }

       updateBudget() {
  

        // Call the budget service to create the budget
        this.budgetService.updateBudget(this.budget).subscribe(response => {
          console.log('Expense updated successfully:', response);
          
          this.router.navigate(['/budgets']);
        },
        error => {
          console.log("something happend ",error)
        });
      }
     




      onFormSubmit() {
        if (this.formType === 'Create') {
          this.createBudget();
        } else if (this.formType === 'Update') {
          this.updateBudget();

        }
      }
}
