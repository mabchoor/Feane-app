from django.contrib import admin

# Register your models here.
from .models import Dish, Category

admin.site.register(Dish)
admin.site.register(Category)