from django.shortcuts import render
from django.views.decorators.cache import never_cache
from django.contrib.auth.decorators import login_required


@never_cache
@login_required
def studentAppointment(request):
    return render(request, 'appointment.html', {'user': request.user})
@never_cache
@login_required
def studentMessages(request):
    return render(request, 'messages.html', {'user': request.user})
@never_cache
@login_required
def studentSchedule(request):
    return render(request, 'schedule.html', {'user': request.user})
@never_cache
@login_required
def studentSettings(request):
    return render(request, 'settings.html', {'user': request.user})