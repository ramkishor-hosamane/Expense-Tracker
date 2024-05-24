from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from .models import Expense
from .search_indexes import ExpenseIndex

@receiver(post_save, sender=Expense)
def index_expense(sender, instance, **kwargs):
    
    instance_expense = ExpenseIndex.from_model(instance)
    instance_expense.save()

@receiver(post_delete, sender=Expense)
def delete_expense(sender, instance, **kwargs):
    instance_expense = ExpenseIndex.from_model(instance)
    instance_expense.delete()
