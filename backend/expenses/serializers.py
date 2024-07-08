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

# transactions/serializers.py

from rest_framework import serializers
from expenses.parse_expense import TransactionParser
class TransactionSerializer(serializers.Serializer):
    expense_file = serializers.FileField()

    def validate_pdf_file(self, value):
        if not value.name.endswith('.pdf'):
            raise serializers.ValidationError("File must be a PDF.")
        return value

    def save(self):
        expense_file = self.validated_data['expense_file']

        # Process the PDF file
        #transactions = self.parse_transactions_from_pdf(pdf_file)
        transaction_parser = TransactionParser(expense_file)
        transactions = transaction_parser.parse_transaction_statement()
        return transactions

    def parse_transactions_from_pdf(self, pdf_file):
        transactions = []

        with pdfplumber.open(pdf_file) as pdf:
            for page in pdf.pages:
                text = page.extract_text()

                # Define patterns to extract date, description, amount
                date_pattern = r"([A-Za-z]{3} \d{2}, \d{4})"
                description_pattern = r"Paid to (.+?) DEBIT"
                amount_pattern = r"₹([\d,]+)"

                # Find all matches in the text
                matches = re.findall(f"{date_pattern}.*?{description_pattern}.*?{amount_pattern}", text, re.DOTALL)

                for match in matches:
                    date = match[0]
                    description = match[1].strip()
                    amount = float(match[2].replace(',', ''))  # Convert amount string to float

                    transactions.append({
                        'date': date,
                        'description': description,
                        'amount': amount
                    })

        return transactions
