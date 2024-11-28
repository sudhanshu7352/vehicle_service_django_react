from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api import views
from api.views import RevenueAPIView

router = DefaultRouter()
router.register(r'components', views.ComponentViewSet)
router.register(r'vehicles', views.VehicleViewSet)
router.register(r'issues', views.IssueViewSet)
router.register(r'payments', views.PaymentViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    # Path for RevenueAPIView
    path('api/revenue/', RevenueAPIView.as_view(), name='revenue'),
    # Uncomment the line below to include other API viewsets
    path('api/', include(router.urls)),
]
