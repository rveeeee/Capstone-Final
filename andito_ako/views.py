from django.shortcuts import render

def index(request):
    return render(request, 'index.html')
def appointmentPage(request):
    return render(request, 'appointment.html')


#counselor interface
def counselorAppointment(request):
    return render(request, 'counselor/appointment.html')
def counselorDashboard(request):
    return render(request, 'counselor/dashboard.html')
def counselorMessages(request):
    return render(request, 'counselor/messages.html')
def counselorSettings(request):
    return render(request, 'counselor/settings.html')
def counselorStudents(request):
    return render(request, 'counselor/students.html')

#admin interface
def admin(request):
    return render(request, 'admin/admin.html')
def adminAppointment(request):
    return render(request, 'admin/appointment.html')
def adminCounselor(request):
    return render(request, 'admin/counselor.html')
def adminFeedbacks(request):
    return render(request, 'admin/feedbacks.html')
def adminRequests(request):
    return render(request, 'admin/requests.html')
def adminSchedule(request):
    return render(request, 'admin/schedule.html')
def adminSettings(request):
    return render(request, 'admin/settings.html')
def adminStudents(request):
    return render(request, 'admin/students.html')