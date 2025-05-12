from django.urls import path
from .views import DishList

urlpatterns = [
    path('dishes/', DishList.as_view(), name='dish-list'),
]
