from django.shortcuts import render
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
# Create your views here.
from rest_framework import viewsets
from .models import Income
from .serializers import IncomeSerializer
class CustomPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

class IncomeViewSet(viewsets.ModelViewSet):
    serializer_class = IncomeSerializer
    pagination_class = CustomPagination
    permission_classes = [IsAuthenticated]
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    def get_queryset(self):
        return Income.objects.filter(user=self.request.user).order_by('-date')
