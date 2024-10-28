from django.shortcuts import render
from django.views.decorators.cache import never_cache
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import never_cache
from django.contrib.auth.decorators import login_required

# Create your views here.
@never_cache
@login_required
def studentAppointment(request):
    return render(request, 'appointment.html')
@never_cache
@login_required
def studentMessages(request):
    return render(request, 'messages.html')
@never_cache
@login_required
def studentSchedule(request):
    return render(request, 'schedule.html')
@never_cache
@login_required
def studentSettings(request):
    return render(request, 'settings.html')