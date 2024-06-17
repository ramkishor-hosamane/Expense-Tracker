import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../Services/analytics.service';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'category-expenses-breakdown',
  templateUrl: './category-expenses.component.html',
  styleUrls: ['./category-expenses.component.css'],
  providers:[]
})
export class CategoryExpensesComponent implements OnInit {
  categoryData: any[] = [];


  constructor(private analyticsService: AnalyticsService) {   
  }

  ngOnInit(): void {
    this.fetchCategoryExpenses();
  }

  fetchCategoryExpenses() {
    this.analyticsService.getCategoryExpenseBreakdown().subscribe(
      (data: any[]) => {
        this.categoryData = data;
        console.log(this.categoryData)
      },
      (error: any) => {
        console.error('Error fetching category expense breakdown:', error);
      }
    );
  }
}
