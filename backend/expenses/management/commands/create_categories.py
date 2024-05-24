from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from expenses.models import Expense
from budgets.models import Category
import random
from faker import Faker
from datetime import datetime, timedelta

class Command(BaseCommand):
    help = 'Seeds the database with expense data'

    def handle(self, *args, **options):
        # Get or create categories
        categories = ['Food', 'Groceries', 'Clothes', 'Travel', 'Entertainment', 'Recharge', 'Others', 'Unknown']
        

        user = User.objects.get(id=1)

        # Real-life expense data
        expenses = [
            ("Dominoz Pizza", "Food", 196, "1/5/23"),
            ("Breakfast (Idli Vada)", "Food", 45, "2/5/23"),
            ("Burger + Chikku Shake + Sweet corn", "Food", 115, "2/5/23"),
            ("Breakfast (Idli Vada)", "Food", 45, "3/5/23"),
            ("Lunch (Curd Rice)", "Food", 40, "3/5/23"),
            ("Panner Roll", "Food", 50, "3/5/23"),
            ("Vegetables (onion + chilli + caroot)", "Groceries", 30, "3/5/23"),
            ("Green Olive checkered Shirt", "Clothes", 442, "4/5/23"),
            ("Breakfast (Idli Vada)", "Food", 70, "4/5/23"),
            ("Something", "Others", 30, "4/5/23"),
            ("Apple shake + lemons (2)", "Food", 60, "4/5/23"),
            ("Tender coconut", "Food", 40, "5/5/23"),
            ("Petrol", "Travel", 200, "6/5/23"),
            ("Movie + 3d Glass", "Entertainment", 200, "7/5/23"),
            ("Popcorn + Wheels", "Food", 80, "7/5/23"),
            ("Dinner (Idly+Dahi Puri)", "Food", 95, "7/5/23"),
            ("Breakfast (poha)", "Food", 50, "8/5/23"),
            ("burger fries", "Food", 170, "8/5/23"),
            ("lemon soda", "Food", 30, "8/5/23"),
            ("Groceries (Rice 10kg + Salt + Chips)", "Groceries", 191, "8/5/23"),
            ("Water", "Groceries", 17, "9/5/23"),
            ("Tender coconut", "Food", 40, "9/5/23"),
            ("Chats (Dahi Puri)", "Food", 40, "9/5/23"),
            ("Sugar cane Juice", "Food", 25, "9/5/23"),
            ("breakfast + lunch + chaats", "Food", 165, "10/5/23"),
            ("Unknown", "Unknown", 100, "10/5/23"),
            ("lunch + snacks", "Food", 80, "11/5/23"),
            ("Dinner before goa + chikkku + stepsills", "Food", 172, "12/5/23"),
            ("Goa to Kasaragod train booking", "Travel", 462, "13/5/23"),
            ("Breakfast (Goa)", "Food", 520, "13/5/23"),
            ("Accomodation (Goa)", "Travel", 1200, "13/5/23"),
            ("Evening Mumbai Chaats + Chocobar (Goa)", "Food", 320, "14/5/23"),
            ("breakfast + lunch  + coconut drink (goa)", "Food", 655, "14/5/23"),
            ("Jio Recharge Data booster", "Recharge", 61, "14/5/23"),
        ]

        # Save expenses to database
        for exp in expenses:
            category_name = exp[1]
            category = Category.objects.get(name=category_name)
            amount = exp[2]
            description = exp[0]
            date = datetime.strptime(exp[3], "%d/%m/%y")
            Expense.objects.create(category=category, amount=amount, description=description, date=date, user=user)

        self.stdout.write(self.style.SUCCESS('Successfully seeded expense data'))