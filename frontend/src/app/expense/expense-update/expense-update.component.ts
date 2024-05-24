import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ExpenseService } from '../../Services/expense.service';

@Component({
  selector: 'app-expense-update',
  templateUrl: './expense-update.component.html',
  styleUrl: './expense-update.component.css'
})
export class ExpenseUpdateComponent implements OnInit{
  expense:any;
  categories:any;
  predictedCategory: string = '';
 constructor(private route: ActivatedRoute,private expenseService:ExpenseService,private router:Router){
 
 }
  ngOnInit(): void {
    const expenseId = this.route.snapshot.params['expenseId'];
 
    this.expenseService.getCategories().subscribe(response => {
      this.categories = response;
    });
  
    this.expense = this.expenseService.getExpenseByID(expenseId).subscribe(
    (response: any) => {
      console.log('Got expense:', response);
      this.expense = response
    
    },
    error => {
      console.error('Theres some error in getting expense:', error);
    }
  );
  }
 

 updateExpense() {
  

  // Call the expense service to create the expense
  this.expenseService.updateExpense(this.expense).subscribe(response => {
    console.log('Expense updated successfully:', response);
    
    this.router.navigate(['/expenses']);
  },
  error => {
    console.log("something happend ",error)
  });
}
}
