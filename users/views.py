from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from .forms import StudentRegistrationForm
from .models import Student
from django.contrib import messages
import logging

logger = logging.getLogger(__name__)

def signUp(request):
    if request.method == 'POST':
        form = StudentRegistrationForm(request.POST)
        if form.is_valid():
            # Create the User instance
            user = User.objects.create_user(
                username=form.cleaned_data['username'],
                password=form.cleaned_data['password'],
                first_name=form.cleaned_data['first_name'],
                last_name=form.cleaned_data['last_name'],
                email=form.cleaned_data['email']
            )
            
            # Print the user information to confirm
            print("First Name:", user.first_name)  # Should print the first name
            print("Last Name:", user.last_name)    # Should print the last name
            print("Email:", user.email)            # Should print the email
            
            # Create the Student instance linked to the user
            Student.objects.create(
                user=user,
                year_of_study=form.cleaned_data['year_of_study'],
                student_id=form.cleaned_data['student_id'],
                department=form.cleaned_data['department'],
                program=form.cleaned_data['program'],
                contact_number=form.cleaned_data['contact_number'],
                address=form.cleaned_data['address']
            )

            messages.success(request, "Registration successful!")
            return redirect('users:logIn')
    else:
        form = StudentRegistrationForm()
    return render(request, 'sign-up.html', {'form': form})


def logIn (request):
    return render(request, 'login.html')