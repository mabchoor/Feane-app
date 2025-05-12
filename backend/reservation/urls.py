from django.urls import path
from .views import ReservationListCreateView, ReservationDetail

urlpatterns = [
  
 path('liste/', views.reservations_list, name='reservations-list'),
]
