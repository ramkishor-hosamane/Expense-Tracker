import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../Services/analytics.service';

@Component({
  selector: 'budget-expenses-histogram',
  templateUrl: './budget-vs-expenses.component.html',
  styleUrls: ['./budget-vs-expenses.component.css']
})
export class BudgetVsExpensesComponent implements OnInit {
  budgetData: any[] = [];
  histogramData:any;
  histogramChartOptions:any;
  constructor(private analyticsService: AnalyticsService) { }

  ngOnInit(): void {
    this.fetchBudgetVsExpenses();
  }

  fetchBudgetVsExpenses() {
    this.analyticsService.getBudgetVsExpenseHistogram().subscribe(
      (data: any[]) => {
        this.budgetData = data;
        console.log(this.budgetData)
        this.applyHistogramChart();
      },
      (error: any) => {
        console.error('Error fetching budget vs expense histogram:', error);
      }
    );
  }


  applyHistogramChart()
  {
   
    this.histogramData = [
      {
        name: 'Expense',
        data: this.budgetData.map(item => item.expense),
        color: '#DC143C' // Crimson Red
      },
      {
        name: 'Budget',
        data: this.budgetData.map(item => item.budget),
        color: '#4CAF50' // Success Green
      }
    ];
    
    this.histogramChartOptions = {
      chart: {
        type: "bar",
        height: 350,
        animations: {
          enabled: true,
          easing: 'easeInOut', // You can explore different easing options
          speed: 800 // Adjust the animation speed
        }
      },
      xaxis: {
        categories: this.budgetData.map(item => item.category_name)
      },
      yaxis: {
        title: {
          text: 'Expense Amount'
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '50%',
          borderRadius: 5, // Adds rounded corners to bars
          // Other histogram options if needed
        }
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        show: false // Hide grid lines for a cleaner look
      },
      stroke: {
        width: 2,
        colors: ['transparent'] // Removes border lines from bars
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [0, 100]
        }
      },
      tooltip: {
        enabled: true,
        // Customize tooltip content if needed
      },
      legend: {
        show: true,
        position: 'top',
        markers: {
          radius: 10, // Adjust marker size
          offsetX: 0,
          offsetY: 0
        },
        itemMargin: {
          horizontal: 10,
          vertical: 5
        }
      },
      theme: {
        mode: 'light' // or 'dark'
      }
    };

}

}