from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.home, name='home'),
    path('home/menu/', views.menu, name='menu'),
    path('menu/', views.dish_list, name='dish_list'),
      path('menu/add/', views.add_dish, name='add_dish'),
    path('menu/edit/<int:pk>/', views.edit_dish, name='edit_dish'),
    path('menu/delete/<int:pk>/', views.delete_dish, name='delete_dish'),

    path('home/reservations/', views.reservations, name='reservations'),
    path('home/orders/', views.orders, name='orders'),
    path('home/feedback/', views.feedback, name='feedback'),
    
    
     path('app/', views.react_app, name='react_app'),
    
    
    
]
