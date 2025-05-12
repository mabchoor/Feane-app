"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from django.conf import settings
from django.conf.urls.static import static
from reservation.views import ReservationListCreateView
from reservation.views import ReservationDetail

urlpatterns = [
    path('admin/', admin.site.urls),

    # 🔐 Authentification JWT (pour React ou Postman)
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # 📦 API de ton app "menu"
    path('api/', include('menu.urls')),
    path('api/', include('reservation.urls')),

    # 🌐 Pages Django Template (dashboard/menu en Django Template)
    path('', include('restaurant.urls')),

    # 🔐 Login/Logout (Django login template ou admin)
    path('accounts/', include('django.contrib.auth.urls')),

    path('reservations/<int:pk>/', ReservationDetail.as_view()),
    
]

# ✅ Fichiers media (images uploadées via ImageField)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
