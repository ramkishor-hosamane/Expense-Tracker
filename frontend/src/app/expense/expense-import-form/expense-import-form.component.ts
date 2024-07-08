import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExpenseService } from '../../Services/expense.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'expense-import-form',
  templateUrl: './expense-import-form.component.html',
  styleUrls: ['./expense-import-form.component.css']
})
export class ExpenseImportFormComponent {

  @Input() imported_expenses: any;
  @Input() categories: any[] = [];
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() afterExpenseCreateEvent = new EventEmitter<string>();
  @ViewChild('ExpenseForm', { static: false }) ExpenseForm: any ; // Declare ExpenseForm property

  constructor(private modalService: NgbModal, private expenseService: ExpenseService) { }

  onFormSubmit() {
    if (!this.ExpenseForm.valid) {
      alert("Please fix the error in form field errors")
      return;
    }

    console.log("Updated expenses", this.imported_expenses);
    var failed_expenses: any[] = []
    this.imported_expenses.forEach((expense: any) => {
      expense.category = this.categories.find(cat => cat.id === expense.category.id);

      this.expenseService.createExpense(expense).subscribe(response => {
        console.log(response);
      }, error => {
        failed_expenses.push(expense)
        console.error(error);
      });

    });
    console.log("Failed expense creation ",failed_expenses)


    // Emit event to notify parent component (ExpenseViewComponent) to close modal
    this.closeModal.emit();
    this.afterExpenseCreateEvent.emit()
  }

  trackByFn(index: number, item: any): number {
    return item.identifier; // Assuming 'identifier' is a unique identifier
  }

  deleteExpense(index: number): void {
    this.imported_expenses.splice(index, 1);
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl' });
  }

  ngOnInit() {
    console.log("Imported expenses", this.imported_expenses);
  }
}
