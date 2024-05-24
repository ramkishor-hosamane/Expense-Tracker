from django.urls import path
from .views import *
urlpatterns = [
    path('categories/', CategoryListCreateAPIView.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetailAPIView.as_view(), name='category-detail'),
    path('', ExpenseListCreateAPIView.as_view(), name='expense-list'),
    path('<int:pk>/', ExpenseDetailAPIView.as_view(), name='expense-detail'),
    path('predict_category/', PredictCategoryView.as_view(), name='predict_category'),
    path('export_expenses/', ExpenseExportView.as_view(), name='export_expenses'),

    ]