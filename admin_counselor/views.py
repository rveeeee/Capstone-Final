from django.shortcuts import render
from django.views.decorators.cache import never_cache
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.contrib import messages
# from .forms import FullCounselorRegistrationForm

@never_cache
@login_required
def adminCounselor(request):
    return render(request, 'admin_counselor.html')

@never_cache
@login_required
def adminAppointment(request):
    return render(request, 'appointment_admin.html')

@never_cache
@login_required
def adminCounselors(request):
    return render(request, 'counselor_admin.html')

@never_cache
@login_required
def adminFeedbacks(request):
    return render(request, 'feedbacks_admin.html')

@never_cache
@login_required
def adminRequests(request):
    return render(request, 'requests_admin.html')

@never_cache
@login_required
def adminSchedule(request):
    return render(request, 'schedule_admin.html')

@never_cache
@login_required
def adminSettings(request):
    return render(request, 'settings_admin.html')

@never_cache
@login_required
def adminStudents(request):
    return render(request, 'students_admin.html')
