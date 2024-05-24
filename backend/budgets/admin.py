from django.contrib import admin
from budgets.models import Budget, Category
# Register your models here.
admin.site.register(Category)
admin.site.register(Budget)
