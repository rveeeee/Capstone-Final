from django.urls import path
from . import views 

app_name = 'counselor'

#counselor interface
urlpatterns = [
    path('appointment_counselor/', views.counselorAppointment, name='counselor_appointment'),
    path('dashboard_counselor/', views.counselorDashboard, name='counselor_dashboard'),
    path('messages_counselor/', views.counselorMessages, name='counselor_messages'),
    path('settings_counselor/', views.counselorSettings, name='counselor_settings'),
    path('students_counselor/', views.counselorStudents, name='counselor_students'),
]

 