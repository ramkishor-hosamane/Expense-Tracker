import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IncomeService } from '../../Services/income.service';

@Component({
  selector: 'income-form',
  templateUrl: './income-form.component.html',
  styleUrl: './income-form.component.css'
})
export class IncomeFormComponent {
  predictedCategory:any ;
  @Input() formType:string = "Create";
  @Input() income = { amount: 0, description: '', type:  '' , date: new Date().toISOString().split('T')[0] };
  @Output() afterIncomeCreateEvent = new EventEmitter<string>();
  income_types = {'stock': 'Stock',
  'buisness': 'Buisness',
  'paycheck': 'Paycheck',
  'rd':'Recurring Deposit',
  'mf': 'Mutual funds'}
  constructor(private incomeService: IncomeService,private router:Router) {
  }
 

 


       createIncome() {
         //Assign predicted category to the income if available
         
         console.log("income is ",this.income)
         // Call the income service to create the income
         this.incomeService.createIncome(this.income).subscribe(response => {
           console.log('Income created successfully:', response);
           // Reset income object with today's date
           this.income = { amount: 0, description: '', type:  '' , date: new Date().toISOString().split('T')[0] };
           this.afterIncomeCreateEvent.emit();
          });
       }

       updateIncome() {
  

        // Call the income service to create the income
        this.incomeService.updateIncome(this.income).subscribe(response => {
          console.log('Income updated successfully:', response);
          
          this.router.navigate(['/incomes']);
        },
        error => {
          console.log("something happend ",error)
        });
      }
     




      onFormSubmit() {
        if (this.formType === 'Create') {
          this.createIncome();
        } else if (this.formType === 'Update') {
          this.updateIncome();

        }
      }
}
