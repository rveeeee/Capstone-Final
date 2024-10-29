from django.urls import path
from . import views 

app_name = 'counselor'

#counselor interface
urlpatterns = [
    path('appointment/', views.counselorAppointment, name='counselor_appointment'),
    path('dashboard/', views.counselorDashboard, name='counselor_dashboard'),
    path('messages/', views.counselorMessages, name='counselor_messages'),
    path('settings/', views.counselorSettings, name='counselor_settings'),
    path('students/', views.counselorStudents, name='counselor_students'),
]

 