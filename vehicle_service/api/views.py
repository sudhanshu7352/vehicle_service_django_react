from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Component, Vehicle, Issue, Payment
from .serializers import ComponentSerializer, VehicleSerializer, IssueSerializer, PaymentSerializer
from django.db.models import Sum
from django.utils import timezone
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Payment
from datetime import timedelta
from rest_framework.decorators import action
from datetime import datetime
from django.utils.timezone import make_aware

class RevenueAPIView(APIView):
    def get(self, request, *args, **kwargs):
        today = timezone.now().date()

        # Get revenue for today
        daily_revenue = Payment.objects.filter(paid_at__date=today).aggregate(Sum('amount_paid'))['amount_paid__sum'] or 0

        # Get revenue for the current month
        start_of_month = today.replace(day=1)
        monthly_revenue = Payment.objects.filter(paid_at__date__gte=start_of_month).aggregate(Sum('amount_paid'))['amount_paid__sum'] or 0

        # Get revenue for the current year
        start_of_year = today.replace(month=1, day=1)
        yearly_revenue = Payment.objects.filter(paid_at__date__gte=start_of_year).aggregate(Sum('amount_paid'))['amount_paid__sum'] or 0

        # Prepare the data for the response
        revenue_data = [
            {"date": "Today", "revenue": daily_revenue},
            {"date": "This Month", "revenue": monthly_revenue},
            {"date": "This Year", "revenue": yearly_revenue}
        ]

        return Response(revenue_data)

class RevenueViewSet(viewsets.ViewSet):
    @action(detail=False)
    def list(self, request):
        payments = Payment.objects.all()
        revenue_data = []
        for payment in payments:
            revenue_data.append({
                'date': payment.paid_at.date(),
                'revenue': payment.amount_paid,
            })
        return Response(revenue_data)


class ComponentViewSet(viewsets.ModelViewSet):
    queryset = Component.objects.all()
    serializer_class = ComponentSerializer

class VehicleViewSet(viewsets.ModelViewSet):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer

class IssueViewSet(viewsets.ModelViewSet):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
