// expense.interface.ts
export interface Expense {
    id: number;
    amount: number;
    description: string;
    category: Category;
    date: string;
  }
  
  export interface Category {
    id: number;
    name: string;
  }
  
  // pagination.interface.ts
  export interface PaginatedExpenseResponse {
    count: number;
    next: string;
    previous: string;
    results: Expense[];
    total_pages:number;
  }
  