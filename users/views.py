from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from .forms import StudentRegistrationForm
from .models import Student
from django.contrib import messages
import logging
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.urls import reverse_lazy
from django.views import View
from .forms import LoginForm
from counselor.models import Counselor  # Assuming Counselor model exists in counselors app
from admin_counselor.models import AdminCounselor  # Assuming AdminCounselor model exists in admin_counselor app


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


def logIn(request):
    if request.method == 'POST':
        form = LoginForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')

            # Check if the user exists in the database
            if not User.objects.filter(username=username).exists():
                messages.error(request, "You are not signed up yet.")
                form = LoginForm()  # Clear form fields
            else:
                user = authenticate(request, username=username, password=password)

                if user is not None:
                    login(request, user)

                    # Check if the user is an admin counselor
                    if AdminCounselor.objects.filter(user=user).exists():
                        # Redirect to admin counselor app
                        return redirect('admin_counselor:admin_counselor')  # Admin Counselor Interface

                    # Check if the user is a counselor
                    elif Counselor.objects.filter(user=user).exists():
                        # Redirect to counselors app
                        return redirect('counselor:counselor_dashboard')  # Counselor Interface

                    # Otherwise, redirect to students app
                    else:
                        return redirect('students:student_schedule')  # Students Interface
                else:
                    messages.error(request, "Username or password is incorrect.")
                    form = LoginForm()  # Clear form fields
        else:
            messages.error(request, "Invalid username or password.")
            form = LoginForm()  # Clear form fields
    else:
        form = LoginForm()
    return render(request, 'login.html', {'form': form})


# Logout view
@login_required
def logOut(request):
    logout(request)
    return redirect('users:logIn')  # Redirect to the login page after logout
