from rest_framework import serializers
from .models import Category, Expense

class CategorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Category
        fields = '__all__'


 

class ExpenseSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    class Meta:
        model = Expense
        fields = ('id', 'category', 'amount', 'description', 'date')
    def create(self, validated_data):
        category_data = validated_data.pop('category')
        category_instance, _ = Category.objects.get_or_create(**category_data)
        expense_instance = Expense.objects.create(category=category_instance, **validated_data)
        return expense_instance        

    def update(self, instance, validated_data):
        
        category_data = validated_data.pop('category', None)
        if category_data:
            category_instance, _ = Category.objects.get_or_create(**category_data)
            instance.category = category_instance
        
        instance.amount = validated_data.get('amount', instance.amount)
        instance.description = validated_data.get('description', instance.description)
        instance.date = validated_data.get('date', instance.date)
        instance.save()
        
        return instance

from rest_framework import serializers

class PredictionSerializer(serializers.Serializer):
    description = serializers.CharField(max_length=255)
