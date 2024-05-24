import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExpenseService } from '../../Services/expense.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'expense-form',
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css'
})
export class ExpenseFormComponent {
  predictedCategory:any ;
  @Input() formType:string = "Create";
  @Input() expense = { amount: 0, description: '', category: { id: 0, name: '' }, date: new Date().toISOString().split('T')[0] };
  @Input() categories: any[] = [];
  @Output() afterExpenseCreateEvent = new EventEmitter<string>();

  constructor(private expenseService: ExpenseService,private router:Router) {
  }
 

     // Function to predict category based on description
     predictCategory(description: string): void {

      this.expenseService.predictCategory(description).subscribe(response => {
       this.predictedCategory = response.category;
     });
       }




       // Function to create expense
       createExpense() {
         //Assign predicted category to the expense if available
         if (this.predictedCategory) {
           const matchedCategory = this.categories.find(cat => cat.name === this.predictedCategory);
           if (matchedCategory) {
             this.expense.category = matchedCategory;
           }
         }
         console.log("expense is ",this.expense)
         // Call the expense service to create the expense
         this.expenseService.createExpense(this.expense).subscribe(response => {
           console.log('Expense created successfully:', response);
           // Reset expense object with today's date
           this.expense = { amount: 0, description: '', category: { id: 0, name: '' }, date: new Date().toISOString().split('T')[0] };
           // Reset predicted category
           this.predictedCategory = '';
           // Fetch expenses again after creating the new expense
           this.afterExpenseCreateEvent.emit();
          });
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
     




      onFormSubmit() {
        if (this.formType === 'Create') {
          this.createExpense();
        } else if (this.formType === 'Update') {
          this.updateExpense();

        }
      }
}
