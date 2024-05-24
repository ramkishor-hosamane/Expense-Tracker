import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../Services/budget.service';
import { ExpenseService } from '../../Services/expense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget-view',
  templateUrl: './budget-view.component.html',
  styleUrl: './budget-view.component.css'
})
export class BudgetViewComponent implements OnInit{

  budgets:any[] = [];
  categories: any[] = [];
  constructor(private budgetService:BudgetService,private expenseService:ExpenseService,private router:Router){}
  ngOnInit(): void {
this.fetchBudgets();
this.fetchCategories();
  }

  fetchCategories() {
    this.expenseService.getCategories().subscribe((response: any[]) => {
      this.categories = response;
    });
  }
  fetchBudgets() {
    this.budgetService.getBudgets().subscribe((response) => {
        console.log("Response for budgets ",response)
        this.budgets = response; 

    });
  }

  deleteBudget(budgetId: number) {
    if (confirm('Are you sure you want to delete this budget?')) {
      this.budgetService.deleteBudget(budgetId).subscribe(() => {
        console.log('Budget deleted successfully');
        // Fetch budgets again after deletion
        this.fetchBudgets();
      });
    }
  }


  updateBudget(budgetId: number) {
     this.router.navigate(['/budgets/',budgetId]);

  }

}
