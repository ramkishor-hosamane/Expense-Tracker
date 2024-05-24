import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from '../../Services/expense.service';
import { BudgetService } from '../../Services/budget.service';

@Component({
  selector: 'app-budget-update',
  templateUrl: './budget-update.component.html',
  styleUrl: './budget-update.component.css'
})
export class BudgetUpdateComponent {
  categories: any[] = [];
  budget: any;
  constructor(private route: ActivatedRoute,private expenseService:ExpenseService,private router:Router,
    private budgetService:BudgetService){}

  ngOnInit(): void {
    const budgetId = this.route.snapshot.params['budgetId'];
 
    this.expenseService.getCategories().subscribe(response => {
      this.categories = response;
    });
  
    this.budget = this.budgetService.getBudgetByID(budgetId).subscribe(
    (response: any) => {
      console.log('Got budget:', response);
      this.budget = response
    
    },
    error => {
      console.error('Theres some error in getting budget:', error);
    }
  );
  }
 

 updateBudget() {
  

  // Call the budget service to create the budget
  this.budgetService.updateBudget(this.budget).subscribe(response => {
    console.log('Budget updated successfully:', response);
    
    this.router.navigate(['/budgets']);
  },
  error => {
    console.log("something happend ",error)
  });
}
}
