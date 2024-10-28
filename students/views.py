from django.shortcuts import render

# Create your views here.
def studentAppointment(request):
    return render(request, 'appointment.html')
def studentMessages(request):
    return render(request, 'messages.html')
def studentSchedule(request):
    return render(request, 'schedule.html')
def studentSettings(request):
    return render(request, 'settings.html')