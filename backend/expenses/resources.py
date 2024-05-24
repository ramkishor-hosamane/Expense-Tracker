# expense_tracker_api/resources.py
from import_export import resources
from .models import Expense
class ExpenseResource(resources.ModelResource):
    class Meta:
        model = Expense
        fields = ('id', 'amount', 'description', 'category__name', 'date', 'user__username')
