from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Reservation
from .serializers import ReservationSerializer


def reservations_list(request):
    reservations = Reservation.objects.all()
    return render(request, 'reservation/reservations_list.html', {'reservations': reservations})