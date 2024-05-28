import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../Services/analytics.service';
import { AuthService } from '../Services/auth.service';
import { Subscription } from 'rxjs';
import { SharedService } from '../Services/shared.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ExpenseTrendchartOptions: any ={};
  total_expenses:any;
  category_expenses:any;
  total_income:any;
  income_change:any;
  private homeRefreshSubscription: Subscription= new Subscription();

  constructor(private authService:AuthService,private analyticsService:AnalyticsService,private sharedService:SharedService) { }
  is_user_authenticated:boolean = false;

  ngOnInit(): void {
    this.homeRefreshSubscription = this.sharedService.homeRefresh.subscribe(() => {
      this.refreshPage();

    });
    this.refreshPage();
  }
  refreshPage(){

    this.is_user_authenticated =  this.authService.isAuthenticated();
    console.log("Refreshing home[age")
    if (this.is_user_authenticated)
    {
      
      this.getAnalytics();
    }

  }
  getAnalytics(){

    this.analyticsService.getExpenseAnalytics().subscribe(
      (response: any) => {
        console.log(response)
         this.total_expenses = response.total_expenses;
         this.category_expenses = response.category_expenses;
         this.total_income=60000;
         this.income_change=2000;
         

      },
      error => {
        console.error('something happend while fetching analytics',error)
      }
    )

    this.analyticsService.getExpenseTrends().subscribe(
      (response: any) => {
        console.log(response)
        this.ExpenseTrendchartOptions = {
          series: [
            {
              name: 'Expense',
              data: response.amount//[30, 40, 35, 50, 49, 60, 70, 91, 125]
            },
         
          ],
          chart: {
            type: 'area',
            height: 350
          },
          xaxis: {
            categories: response.date //['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
          },
          title: {
            text: 'Expense Trend',
            align: 'center'
          },
          // subtitle: {
          //   text: 'Subtitle',
          //   align: 'center'
          // },
          theme: {
            palette: 'palette1'
          }
          // Add more options as needed
        };
      },
      error => {
        console.error('something happend while fetching analytics',error)
      }
    )
  }

  ngOnDestroy() {
    this.homeRefreshSubscription.unsubscribe();

  }

}
