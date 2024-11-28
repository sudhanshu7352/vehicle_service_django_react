from django.db import models

# Create your models here.
class Component(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)

class Vehicle(models.Model):
    make = models.CharField(max_length=255)
    model = models.CharField(max_length=255)
    year = models.IntegerField()

class Issue(models.Model):
    vehicle = models.ForeignKey(Vehicle, related_name='issues', on_delete=models.CASCADE)
    description = models.TextField()
    components_needed = models.ManyToManyField(Component, related_name='issues')
    is_repair = models.BooleanField(default=True)  # True for repair, False for new component
    created_at = models.DateTimeField(auto_now_add=True)

class Payment(models.Model):
    vehicle = models.ForeignKey(Vehicle, related_name='payments', on_delete=models.CASCADE)
    amount_paid = models.DecimalField(max_digits=10, decimal_places=2)
    paid_at = models.DateTimeField(auto_now_add=True)