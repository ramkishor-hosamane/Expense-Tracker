from elasticsearch_dsl import Document, Text, Integer,Float,Keyword
from elasticsearch_dsl.connections import connections
from .models import Expense

# Define a connection to your Elasticsearch cluster
# Make sure to replace 'localhost' and '9200' with your Elasticsearch host and port
connections.create_connection(hosts=['http://localhost:9200'])

# Define the Elasticsearch index for the Expense model
class ExpenseIndex(Document):
    amount = Float()
    description = Text()
    category = Text()

    class Index:
        name = 'expense_index'

    def save(self, **kwargs):
        return super().save(**kwargs)
    
    @classmethod
    def from_model(cls, expense):
        return cls(
            meta={'id': expense.id},
            amount=expense.amount,
            description=expense.description,
            category=expense.category.name
        )

# Register the index with Elasticsearch
ExpenseIndex.init()
