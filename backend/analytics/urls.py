from django.urls import path
from .views import expense_analytics,expense_trend_over_time,expense_distribution,CategoryExpenseBreakdown,BudgetVsExpenseHistogram

urlpatterns = [
    path('expense_analytics/', expense_analytics, name='expense_analytics'),
    path('expense_distribution/', expense_distribution, name='expense_distribution'),
    path('expense_trend_over_time/', expense_trend_over_time, name='expense_trend_over_time'),
        path('category-expense-breakdown/', CategoryExpenseBreakdown.as_view(), name='category-expense-breakdown'),
    path('budget-vs-expense-histogram/', BudgetVsExpenseHistogram.as_view(), name='budget-vs-expense-histogram'),

]
