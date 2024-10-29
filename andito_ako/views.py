from django.shortcuts import render

def index(request):
    return render(request, 'index.html')
def appointmentPage(request):
    return render(request, 'appointment.html')
