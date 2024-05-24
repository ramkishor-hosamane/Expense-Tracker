from django.urls import path
from .views import IncomeViewSet
income_list = IncomeViewSet.as_view({'get': 'list', 'post': 'create'})
income_detail = IncomeViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'})

urlpatterns = [
    path('', income_list, name='income-list'),
    path('<int:pk>/', income_detail, name='income-detail'),
]