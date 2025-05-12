from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from .models import Dish, Category
from .forms import DishForm

# 🏠 Vue accueil
@login_required
def home(request):
    return render(request, 'home.html')

# 🍽️ Vue menu public avec filtres par catégorie
@login_required
def menu(request):
    selected_category_id = request.GET.get('category')
    categories = Category.objects.all()

    if selected_category_id:
        dishes = Dish.objects.filter(category_id=selected_category_id)
    else:
        dishes = Dish.objects.all()

    return render(request, 'menu.html', {
        'categories': categories,
        'dishes': dishes,
        'selected_category': int(selected_category_id) if selected_category_id else None
    })

def add_dish(request):
    if request.method == 'POST':
        form = DishForm(request.POST, request.FILES)
        if form.is_valid():
            print("formulaire valide")
            form.save()    
            return redirect('dish_list')
        else:
            print ("formulaire non valide:",form.errors )
    else:
        form = DishForm()
    return render(request, 'add_dish.html', {'form': form})

def dish_list(request):
    dishes = dishes.objects.all()
    return render(request, 'dishes_list.html', {'dishes': dishes})




# 📅 Réservations
@login_required
def reservations(request):
    return render(request, 'reservations.html')

# 🧾 Commandes
@login_required
def orders(request):
    return render(request, 'orders.html')

# ⭐ Avis
@login_required
def feedback(request):
    return render(request, 'feedback.html')

# 🔧 ADMIN CRUD DISHES

@login_required
def dish_list(request):
    dishes = Dish.objects.all()
    return render(request, 'dishes_list.html', {'dishes': dishes})

@login_required
def add_dish(request):
    if request.method == 'POST':
        form = DishForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('dish_list')
    else:
        form = DishForm()
    return render(request, 'dish_form.html', {'form': form})

@login_required
def edit_dish(request, pk):
    dish = get_object_or_404(Dish, pk=pk)
    form = DishForm(request.POST or None, request.FILES or None, instance=dish)
    if form.is_valid():
        form.save()
        return redirect('dish_list')
    return render(request, 'dish_form.html', {'form': form})

@login_required
def delete_dish(request, pk):
    dish = get_object_or_404(Dish, pk=pk)
    if request.method == 'POST':
        dish.delete()
        return redirect('dish_list')
    return render(request, 'confirm_delete.html', {'dish': dish})


def react_app(request):
    return render(request, 'react/index.html')
