# Generated by Django 4.2.9 on 2024-06-11 09:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('income', '0002_rename_choices_income_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='income',
            name='type',
            field=models.CharField(choices=[('Stock', 'Stock'), ('Buisness', 'Buisness'), ('Paycheck', 'Paycheck'), ('Recurring Deposit', 'Recurring Deposit'), ('Mutual funds', 'Mutual funds')], max_length=50),
        ),
    ]