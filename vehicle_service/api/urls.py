from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
# from api import views
# from .views import RevenueAPIView
from api.views import RevenueAPIView
router = DefaultRouter()
router.register(r'components', views.ComponentViewSet)
router.register(r'vehicles', views.VehicleViewSet)
router.register(r'issues', views.IssueViewSet)
router.register(r'payments', views.PaymentViewSet)
# router.register(r'revenue', RevenueViewSet, basename='revenue')
# urlpatterns = router.urls
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/revenue/', RevenueAPIView.as_view(), name='revenue')
]
