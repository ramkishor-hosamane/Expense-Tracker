import { Component } from '@angular/core';
import { IncomeService } from '../../Services/income.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-income-update',
  templateUrl: './income-update.component.html',
  styleUrl: './income-update.component.css'
})
export class IncomeUpdateComponent {
  income:any;
  categories:any;
  predictedCategory: string = '';
 constructor(private route: ActivatedRoute,private incomeService:IncomeService,private router:Router){
 
 }
  ngOnInit(): void {
    const incomeId = this.route.snapshot.params['incomeId'];
 
    
  
    this.income = this.incomeService.getIncomeByID(incomeId).subscribe(
    (response: any) => {
      console.log('Got income:', response);
      this.income = response
    
    },
    error => {
      console.error('Theres some error in getting income:', error);
    }
  );
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
}
