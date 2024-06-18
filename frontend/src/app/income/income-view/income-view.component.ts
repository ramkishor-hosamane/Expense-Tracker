import { Component } from '@angular/core';
import { IncomeService } from '../../Services/income.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income-view',
  templateUrl: './income-view.component.html',
  styleUrl: './income-view.component.css'
})
export class IncomeViewComponent {
  incomes: any[] = [];
  currentPage = 1; // Current page number
  noOfIncomes = 0;
  types: any[] = [];
  sortBy: string="";
  sortDirection: string="";

  
  constructor(private incomeService: IncomeService,private router:Router) {}

  ngOnInit() {
    this.fetchIncomes();
  }

 
  fetchIncomes() {
    this.incomeService.getIncomes(this.currentPage).subscribe((response:any) => {
        console.log("Response from paginated ",response)
        this.incomes = response.results; // Assuming your API returns paginated results in 'results' field
        // You may need to adjust this according to the actual field names in your response
        // Make sure to handle the case when response.results is undefined or null
        this.noOfIncomes = response.count
        //this.totalPages = response.total_pages; // Assuming your API returns total number of pages
    });
  }


  loadPageData()
  {
    this.fetchIncomes();
  }


 

  deleteIncome(incomeId: number) {
    if (confirm('Are you sure you want to delete this income?')) {
      this.incomeService.deleteIncome(incomeId).subscribe(() => {
        console.log('Income deleted successfully');
        // Fetch incomes again after deletion
        this.fetchIncomes();
      });
    }
  }


  updateIncome(incomeId: number) {
    this.router.navigate(['/incomes/',incomeId]);

  }
  

  ExportIncomes() {
    console.log("Exporting incomes...");
    this.incomeService.ExportIncomes().subscribe(
      (response: Blob) => {
        const blob = new Blob([response], { type: 'text/csv' }); // Create Blob from response
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'incomes.csv'; // Set desired filename
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      },
      error => {
        console.error('Error exporting incomes:', error);
      }
    );
  }

}
