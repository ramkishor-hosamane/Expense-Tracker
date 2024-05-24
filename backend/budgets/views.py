from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Category, Budget
from .serializers import CategorySerializer, BudgetSerializer
from rest_framework.permissions import IsAuthenticated

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class BudgetViewSet(viewsets.ModelViewSet):
    queryset = Budget.objects.all()
    serializer_class = BudgetSerializer
    permission_classes = [IsAuthenticated]


    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        return Budget.objects.filter(user=self.request.user)
    def delete(self, request, *args, **kwargs):
        print("Deleting object ",args)
        return super().delete(request, *args, **kwargs)
    