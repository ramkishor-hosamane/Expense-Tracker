from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from .models import Expense
from .search_indexes import ExpenseIndex, ELASTICSEARCH_AVAILABLE

@receiver(post_save, sender=Expense)
def index_expense(sender, instance, **kwargs):
    if ELASTICSEARCH_AVAILABLE:
        try:
            instance_expense = ExpenseIndex.from_model(instance)
            instance_expense.save()
        except Exception as e:
            # Log the exception or handle it as needed
            print(f"Failed to index expense: {e}")

@receiver(post_delete, sender=Expense)
def delete_expense(sender, instance, **kwargs):
    if ELASTICSEARCH_AVAILABLE:
        try:
            instance_expense = ExpenseIndex.from_model(instance)
            instance_expense.delete()
        except Exception as e:
            # Log the exception or handle it as needed
            print(f"Failed to delete expense index: {e}")
