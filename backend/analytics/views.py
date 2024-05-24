from django.shortcuts import render
from expenses.models import Expense
from budgets.models import Category
from django.db.models import Sum
from rest_framework.response import Response
from django.http import JsonResponse
import datetime
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def expense_analytics(request):
    total_expenses = Expense.objects.filter(user=request.user).aggregate(Sum('amount'))['amount__sum']

    category_expenses = Expense.objects.filter(user=request.user).values('category__name').annotate(total_amount=Sum('amount'))

    return Response({'total_expenses':total_expenses,'category_expenses':category_expenses})
    #return JsonResponse([{'total_expenses':total_expenses,'category_expenses':category_expenses}],safe=False)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def expense_distribution(request):
    category_expenses = Expense.objects.filter(user=request.user).values('category__name').annotate(total_amount=Sum('amount'))
    data = [{'category': expense['category__name'], 'total_amount': expense['total_amount']} for expense in category_expenses]
    return JsonResponse(data, safe=False)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def expense_trend_over_time(request):
    # Example: Plotting expense trend over the past 30 days

    print("request.GET = ",request.GET.get('start_date'))
    print("request.GET = ",request.GET.get('end_date'))
    
    #if request.GET.get('start_date'):
    #    start_date = datetime.date.today() - datetime.timedelta(days=30)
    
    start_date = request.GET.get('start_date',datetime.date.today() - datetime.timedelta(days=30))
    end_date = request.GET.get('end_date',datetime.date.today())
    #expenses = Expense.objects.filter(user=request.user, date__range=(start_date, end_date)).annotate(amount_for_day=Sum('amount'))
    expenses = Expense.objects.filter(user=request.user, date__range=(start_date, end_date)).values('date').annotate(amount_for_day=Sum('amount'))
    data = {'date':[],'amount':[]}
    # for expense in expenses:
    #     data['date'].append(expense.date.strftime('%Y-%m-%d'))
    #     data['amount'].append(expense.amount)
    for expense in expenses:
        data['date'].append(expense['date'].strftime('%Y-%m-%d'))
        data['amount'].append(expense['amount_for_day'])

    return JsonResponse(data, safe=False)