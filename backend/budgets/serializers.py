from rest_framework import serializers
from .models import Category, Budget

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class BudgetSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    class Meta:
        model = Budget
        fields = ('id', 'category', 'amount')
    def create(self, validated_data):
        category_data = validated_data.pop('category')
        category_instance, _ = Category.objects.get_or_create(**category_data)
        expense_instance = Budget.objects.create(category=category_instance, **validated_data)
        return expense_instance        

    def update(self, instance, validated_data):
        
        category_data = validated_data.pop('category', None)
        if category_data:
            category_instance, _ = Category.objects.get_or_create(**category_data)
            instance.category = category_instance
        
        instance.amount = validated_data.get('amount', instance.amount)
        instance.save()
        
        return instance