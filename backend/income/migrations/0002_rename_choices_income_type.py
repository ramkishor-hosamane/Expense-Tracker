# Generated by Django 4.2.9 on 2024-06-10 15:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('income', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='income',
            old_name='choices',
            new_name='type',
        ),
    ]
