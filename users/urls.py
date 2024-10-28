from django.urls import path
from .views import signUp, logIn  # Ensure you import your views

app_name = 'users'

urlpatterns = [
    path('sign-up/', signUp, name='signUp'),
    path('login/', logIn, name='logIn'),  # Ensure this URL is defined
]
