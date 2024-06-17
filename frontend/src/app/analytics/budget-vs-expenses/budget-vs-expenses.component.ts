import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../Services/analytics.service';

@Component({
  selector: 'budget-expenses-histogram',
  templateUrl: './budget-vs-expenses.component.html',
  styleUrls: ['./budget-vs-expenses.component.css']
})
export class BudgetVsExpensesComponent implements OnInit {
  budgetData: any[] = [];

  constructor(private analyticsService: AnalyticsService) { }

  ngOnInit(): void {
    this.fetchBudgetVsExpenses();
  }

  fetchBudgetVsExpenses() {
    this.analyticsService.getBudgetVsExpenseHistogram().subscribe(
      (data: any[]) => {
        this.budgetData = data;
      },
      (error: any) => {
        console.error('Error fetching budget vs expense histogram:', error);
      }
    );
  }
}
