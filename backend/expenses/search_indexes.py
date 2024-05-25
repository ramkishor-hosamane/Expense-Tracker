from elasticsearch_dsl import Document, Text, Float, connections
from elasticsearch import ElasticsearchException
from django.conf import settings
from .models import Expense

# Define a connection to your Elasticsearch cluster using settings
elasticsearch_hosts = settings.ELASTICSEARCH_DSL['default']['hosts']
if settings.ELASTICSEARCH_AVAILABLE:
    try:
        connections.create_connection(hosts=[elasticsearch_hosts])
        ELASTICSEARCH_AVAILABLE = True
    except ElasticsearchException:
        ELASTICSEARCH_AVAILABLE = False
else:
    ELASTICSEARCH_AVAILABLE = False
# Define the Elasticsearch index for the Expense model
class ExpenseIndex(Document):
    amount = Float()
    description = Text()
    category = Text()

    class Index:
        name = 'expense_index'

    def save(self, **kwargs):
        if ELASTICSEARCH_AVAILABLE:
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
if ELASTICSEARCH_AVAILABLE:
    ExpenseIndex.init()
