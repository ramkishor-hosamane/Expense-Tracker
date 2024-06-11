from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
# Create your models here.
class Income(models.Model):
    CHOICES = (
        ('Stock', 'Stock'),
        ('Buisness', 'Buisness'),
        ('Paycheck', 'Paycheck'),
        ('Recurring Deposit','Recurring Deposit'),
        ('Mutual funds', 'Mutual funds')
    )
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.CharField(max_length=50)
    date = models.DateField(default=datetime.now)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.CharField(max_length=50, choices=CHOICES)


