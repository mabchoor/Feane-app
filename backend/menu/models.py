from django.db import models

class Dish(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()  # ✅ Ajout
    price = models.DecimalField(max_digits=6, decimal_places=2)
    category = models.CharField(max_length=50)  # ✅ Ajout
    image = models.ImageField(upload_to='dishes/', blank=True)
    def __str__(self):
        return self.name
