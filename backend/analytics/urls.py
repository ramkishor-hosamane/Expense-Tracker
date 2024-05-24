from django.urls import path
from .views import expense_analytics,expense_trend_over_time,expense_distribution

urlpatterns = [
    path('expense_analytics/', expense_analytics, name='expense_analytics'),
    path('expense_distribution/', expense_distribution, name='expense_distribution'),
    path('expense_trend_over_time/', expense_trend_over_time, name='expense_trend_over_time'),
    
]
