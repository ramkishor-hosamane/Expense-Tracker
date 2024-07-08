import { Component, ElementRef, ViewChild} from '@angular/core';
import { ExpenseService } from '../../Services/expense.service';
import { Router } from '@angular/router';
import { PaginatedExpenseResponse } from './expense.interface';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-expense-view',
  templateUrl: './expense-view.component.html',
  styleUrl: './expense-view.component.css'
})
export class ExpenseViewComponent {
  expenses: any[] = [];
  currentPage = 1; // Current page number
  noOfExpenses = 0;
  categories: any[] = [];
  sortBy: string="";
  sortDirection: string="";
  selectedFile: File| null = null;
  @ViewChild('content') content!: ElementRef;
  modalRef: NgbModalRef | null = null; // Modal reference
  loading: boolean = false;

  imported_expenses=  [
  ]
  constructor(private expenseService: ExpenseService,private router:Router,private modalService: NgbModal) {
    
  }

  ngOnInit() {
    this.fetchExpenses();
    this.fetchCategories();
  }

 
  fetchExpenses() {
    this.expenseService.getExpenses(this.currentPage).subscribe((response: PaginatedExpenseResponse) => {
        console.log("Response from paginated ",response)
        this.expenses = response.results; // Assuming your API returns paginated results in 'results' field
        // You may need to adjust this according to the actual field names in your response
        // Make sure to handle the case when response.results is undefined or null
        this.noOfExpenses = response.count
        //this.totalPages = response.total_pages; // Assuming your API returns total number of pages
    });
  }


  loadPageData()
  {
    this.fetchExpenses();
  }


 

  deleteExpense(expenseId: number) {
    if (confirm('Are you sure you want to delete this expense?')) {
      this.expenseService.deleteExpense(expenseId).subscribe(() => {
        console.log('Expense deleted successfully');
        // Fetch expenses again after deletion
        this.fetchExpenses();
      });
    }
  }


  updateExpense(expenseId: number) {
    this.router.navigate(['/expenses/',expenseId]);

  }
  fetchCategories() {
    this.expenseService.getCategories().subscribe(response => {
      this.categories = response;
      console.log("categories ",this.categories)
    });
  }

  ExportExpenses() {
    console.log("Exporting expenses...");
    this.expenseService.ExportExpenses().subscribe(
      (response: Blob) => {
        const blob = new Blob([response], { type: 'text/csv' }); // Create Blob from response
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'expenses.csv'; // Set desired filename
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      },
      error => {
        console.error('Error exporting expenses:', error);
      }
    );
  }

  ImportExpenses() {
    console.log("Importing expenses...");
    this.expenseService.ExportExpenses().subscribe(
      (response: Blob) => {
        const blob = new Blob([response], { type: 'text/csv' }); // Create Blob from response
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'expenses.csv'; // Set desired filename
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      },
      error => {
        console.error('Error exporting expenses:', error);
      }
    );
  }
  
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  onSubmitUploadFile() {
    if (this.selectedFile) {
      console.log("Selected file:", this.selectedFile);
      this.loading = true; // show loading spinner

      this.expenseService.uploadExpense(this.selectedFile).subscribe(response => {
        console.log(response)
       
        this.imported_expenses = response['transactions']
        // Ensure the modal is open and update its content
        this.modalRef = this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' ,fullscreen:true,scrollable:true});
        
        // if (this.modalRef) {
        //   this.modalRef.componentInstance.imported_expenses = this.imported_expenses;
        // } else {
        //   // Handle case if modalRef is null (optional)
        // }
        this.selectedFile = null;
        this.loading = false; // Hide loading spinner


      },
      error =>
      {
        console.log("Error : ",error)
      }
        
      );

      // Optional: Reset the selected file
      
    } else {
      console.log("No file selected");
    }



  }
}
