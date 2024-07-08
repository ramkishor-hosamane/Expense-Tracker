
from django.http import HttpResponse
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination

from expenses.resources import ExpenseResource
from .models import Category, Expense
from .serializers import CategorySerializer, ExpenseSerializer,PredictionSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from elasticsearch_dsl import Search
from .search_indexes import ELASTICSEARCH_AVAILABLE
from rest_framework import status


class ExpenseExportView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        
        expense_resource = ExpenseResource()

        print("request.user  = ", request.user)


        queryset = Expense.objects.filter(user=request.user)
        dataset = expense_resource.export(queryset=queryset)
        print(dataset.csv)

        response = HttpResponse(dataset.csv, content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="expenses.csv"'
        return response


class CategoryListCreateAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated]
    
class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated]


class CustomPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

class ExpenseListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = ExpenseSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = CustomPagination

    def get_queryset(self):
        return Expense.objects.filter(user=self.request.user).order_by('-date')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ExpenseDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    #queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Expense.objects.filter(user=self.request.user)
    def delete(self, request, *args, **kwargs):
        print("Deleting object ",args)
        return super().delete(request, *args, **kwargs)



class PredictCategoryView(APIView):
    def post(self, request, *args, **kwargs):
        if not ELASTICSEARCH_AVAILABLE:
            return Response({"error": "Elasticsearch is not available"}, status=status.HTTP_503_SERVICE_UNAVAILABLE)
        
        serializer = PredictionSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        description = serializer.validated_data['description']
        
        # Search Elasticsearch index for relevant categories based on description
        search = Search(index='expense_index')
        search = search.query("match", description=description)
        response = search.execute()
        
        # Extract categories from search results
        categories = [(hit.category,hit.amount) for hit in response]
        # If there are categories found, return the most common category
        if categories:
            predicted_category = max(set(categories), key=categories.count)
        else:
            predicted_category = "Unknown",0  # Default category if no matches found
        
        return Response({'category': predicted_category[0],'amount': predicted_category[1]})
    


from .serializers import TransactionSerializer

class ImportTransationsView(APIView):
    def post(self, request):
        serializer = TransactionSerializer(data=request.data)

        if serializer.is_valid():
            transactions = serializer.save()
            response_data = {
                'message': 'Transactions parsed successfully',
                'transactions': transactions,
            }
            return Response(response_data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    