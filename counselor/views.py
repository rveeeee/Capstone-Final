from django.shortcuts import render
from django.views.decorators.cache import never_cache
from django.contrib.auth.decorators import login_required

@never_cache
@login_required
def counselorAppointment(request):
    return render(request, 'appointment_counselor.html')

@never_cache
@login_required
def counselorDashboard(request):
    return render(request, 'dashboard_counselor.html')

@never_cache
@login_required
def counselorMessages(request):
    return render(request, 'messages_counselor.html')

@never_cache
@login_required
def counselorSettings(request):
    return render(request, 'settings_counselor.html')

@never_cache
@login_required
def counselorStudents(request):
    return render(request, 'students_counselor.html')